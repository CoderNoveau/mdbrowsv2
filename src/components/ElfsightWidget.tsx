'use client';

import React, { useEffect, useState } from 'react';

interface ElfsightWidgetProps {
  widgetId: string;
}

// Keep track of script loading state globally
let scriptLoaded = false;

export default function ElfsightWidget({ widgetId }: ElfsightWidgetProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (!scriptLoaded) {
      // Load Elfsight script only once
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      document.body.appendChild(script);
      scriptLoaded = true;

      return () => {
        // Only remove the script if the last instance is unmounted
        document.body.removeChild(script);
        scriptLoaded = false;
      };
    }
  }, []);

  if (!mounted) {
    return null; // Prevent hydration mismatch by not rendering anything on server
  }

  return (
    <div className={`elfsight-app-${widgetId}`} data-elfsight-app-lazy></div>
  );
}
