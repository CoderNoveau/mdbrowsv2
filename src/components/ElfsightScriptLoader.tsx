'use client';

import Script from 'next/script';
import { createContext, useContext, useState } from 'react';

const ElfsightContext = createContext<boolean>(false);

export const useElfsightLoaded = () => useContext(ElfsightContext);

export function ElfsightScriptLoader({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <ElfsightContext.Provider value={isLoaded}>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
        onLoad={() => setIsLoaded(true)}
      />
      {children}
    </ElfsightContext.Provider>
  );
} 
 