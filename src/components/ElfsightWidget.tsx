'use client';

import React, { useEffect, useState } from 'react';

interface ElfsightWidgetProps {
  widgetId: string;
}

declare global {
  interface Window {
    eapps?: {
      initialize?: () => void;
    };
  }
}

const ElfsightWidget = ({ widgetId }: ElfsightWidgetProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the widget is already initialized
    const widgetContainer = document.querySelector(`.elfsight-app-${widgetId}`);
    if (widgetContainer && widgetContainer.children.length > 0) {
      setIsLoading(false);
      return;
    }

    // Function to check and initialize widget
    const initializeWidget = () => {
      if (window.eapps?.initialize) {
        window.eapps.initialize();
        setIsLoading(false);
      }
    };

    // Try to initialize immediately
    initializeWidget();

    // Set up a mutation observer to watch for widget content
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          setIsLoading(false);
          observer.disconnect();
          break;
        }
      }
    });

    // Start observing the widget container
    const container = document.querySelector(`.elfsight-app-${widgetId}`);
    if (container) {
      observer.observe(container, { childList: true, subtree: true });
    }

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [widgetId]);

  return (
    <>
      <div 
        className={`elfsight-app-${widgetId}`}
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
          <p style={{ margin: '0', color: '#666' }}>Loading reviews...</p>
        </div>
      )}
    </>
  );
};

export default ElfsightWidget;
