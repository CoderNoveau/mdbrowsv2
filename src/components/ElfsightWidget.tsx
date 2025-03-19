'use client';

import React, { useEffect, useState, memo } from 'react';

interface ElfsightWidgetProps {
  widgetId: string;
}

// Add type declaration for Elfsight's global object
declare global {
  interface Window {
    eapps?: {
      initialize?: () => void;
    };
  }
}

// Keep track of script loading state globally
let scriptLoaded = false;
let scriptLoading = false;
let scriptLoadPromise: Promise<void> | null = null;
let retryCount = 0;
const MAX_RETRIES = 3;
const TIMEOUT_DURATION = 10000; // 10 seconds

const loadScript = () => {
  if (scriptLoaded) return Promise.resolve();
  if (scriptLoading && scriptLoadPromise) return scriptLoadPromise;

  scriptLoading = true;
  scriptLoadPromise = new Promise((resolve, reject) => {
    // Create timeout promise
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Script load timeout')), TIMEOUT_DURATION);
    });

    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.defer = true;
    
    // Add preload hint
    const preload = document.createElement('link');
    preload.rel = 'preload';
    preload.as = 'script';
    preload.href = script.src;
    document.head.appendChild(preload);

    script.onload = () => {
      scriptLoaded = true;
      scriptLoading = false;
      retryCount = 0;
      resolve();
    };

    script.onerror = () => {
      scriptLoading = false;
      if (retryCount < MAX_RETRIES) {
        retryCount++;
        setTimeout(() => {
          scriptLoadPromise = null;
          loadScript().then(resolve).catch(reject);
        }, 2000 * retryCount); // Exponential backoff
      } else {
        reject(new Error('Failed to load Elfsight script after retries'));
      }
    };

    document.body.appendChild(script);

    // Race between script load and timeout
    Promise.race([scriptLoadPromise, timeoutPromise]).catch((error) => {
      if (error instanceof Error && error.message === 'Script load timeout') {
        script.remove();
        scriptLoading = false;
        scriptLoadPromise = null;
        reject(error);
      }
    });
  });

  return scriptLoadPromise;
};

const ElfsightWidget = ({ widgetId }: ElfsightWidgetProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let isMounted = true;

    const initializeWidget = async () => {
      try {
        await loadScript();
        if (isMounted) {
          setIsLoading(false);
          // Force widget to reinitialize
          window.eapps?.initialize?.();
        }
      } catch (error) {
        if (isMounted) {
          setHasError(true);
          setIsLoading(false);
          setErrorMessage(error instanceof Error ? error.message : 'Failed to load widget');
        }
      }
    };

    initializeWidget();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!mounted) return null;

  if (hasError) {
    return (
      <div style={{ 
        padding: '20px', 
        textAlign: 'center', 
        backgroundColor: '#fff4f4', 
        borderRadius: '8px',
        color: '#e74c3c',
        margin: '1rem 0'
      }}>
        {errorMessage}
        <button 
          onClick={() => window.location.reload()}
          style={{
            display: 'block',
            margin: '1rem auto',
            padding: '8px 16px',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div style={{ 
        padding: '20px', 
        textAlign: 'center',
        backgroundColor: '#f9f7f3',
        borderRadius: '8px',
        margin: '1rem 0'
      }}>
        <div className="loading-spinner" style={{
          display: 'inline-block',
          width: '30px',
          height: '30px',
          border: '3px solid #f3f3f3',
          borderTop: '3px solid #555',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          marginBottom: '10px'
        }} />
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
        <p style={{ margin: '0', color: '#666' }}>Loading reviews...</p>
      </div>
    );
  }

  return (
    <div 
      className={`elfsight-app-${widgetId}`} 
      data-elfsight-app-lazy
      style={{ 
        minHeight: '200px',
        margin: '1rem 0'
      }}
    />
  );
};

export default memo(ElfsightWidget);
