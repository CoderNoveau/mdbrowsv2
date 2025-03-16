'use client';

import React, { useEffect, useState, memo } from 'react';

interface ElfsightWidgetProps {
  widgetId: string;
}

// Keep track of script loading state globally
let scriptLoaded = false;
let scriptLoading = false;
let scriptLoadPromise: Promise<void> | null = null;

const loadScript = () => {
  if (scriptLoaded) return Promise.resolve();
  if (scriptLoading && scriptLoadPromise) return scriptLoadPromise;

  scriptLoading = true;
  scriptLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.onload = () => {
      scriptLoaded = true;
      scriptLoading = false;
      resolve();
    };
    script.onerror = () => {
      scriptLoading = false;
      reject(new Error('Failed to load Elfsight script'));
    };
    document.body.appendChild(script);
  });

  return scriptLoadPromise;
};

const ElfsightWidget = ({ widgetId }: ElfsightWidgetProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    loadScript()
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });

    return () => {
      // Cleanup if component unmounts
      setIsLoading(false);
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
        color: '#e74c3c' 
      }}>
        Widget failed to load. Please refresh the page or try again later.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div style={{ 
        padding: '20px', 
        textAlign: 'center',
        backgroundColor: '#f9f7f3',
        borderRadius: '8px'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <div 
      className={`elfsight-app-${widgetId}`} 
      data-elfsight-app-lazy
      style={{ minHeight: '200px' }}
    />
  );
};

export default memo(ElfsightWidget);
