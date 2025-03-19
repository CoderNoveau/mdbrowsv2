'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useElfsightLoaded } from './ElfsightScriptLoader';

interface ElfsightWidgetProps {
  widgetId: string;
  fallback?: React.ReactNode;
}

declare global {
  interface Window {
    eapps?: {
      initialize?: () => void;
    };
  }
}

const ElfsightWidget = ({ widgetId, fallback }: ElfsightWidgetProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const isScriptLoaded = useElfsightLoaded();
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px',
    threshold: 0
  });

  useEffect(() => {
    if (!inView || !isScriptLoaded) return;

    timeoutRef.current = setTimeout(() => {
      setError(new Error('Widget failed to load'));
      setIsLoading(false);
    }, 10000);

    const initializeWidget = () => {
      if (window.eapps?.initialize) {
        try {
          window.eapps.initialize();
          setIsLoading(false);
          setError(null);
        } catch (err) {
          setError(err instanceof Error ? err : new Error('Failed to initialize widget'));
          setIsLoading(false);
        }
      }
    };

    initializeWidget();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          setIsLoading(false);
          setError(null);
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          observer.disconnect();
          break;
        }
      }
    });

    const container = document.querySelector(`.elfsight-app-${widgetId}`);
    if (container) {
      observer.observe(container, { childList: true, subtree: true });
    }

    return () => {
      observer.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [widgetId, inView, isScriptLoaded]);

  if (error) {
    return fallback || (
      <div style={{ 
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#fff8f8',
        borderRadius: '8px',
        margin: '1rem 0'
      }}>
        <p style={{ margin: '0', color: '#666' }}>
          Widget failed to load. Please refresh the page or try again later.
        </p>
      </div>
    );
  }

  return (
    <div ref={ref}>
      <div 
        className={`elfsight-app-${widgetId}`}
        data-elfsight-app-lazy
        style={{ 
          minHeight: '200px',
          margin: '1rem 0',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in'
        }}
      />
      {isLoading && (
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
          <p style={{ margin: '0', color: '#666' }}>Loading content...</p>
        </div>
      )}
    </div>
  );
};

export default ElfsightWidget;
