'use client';

import Script from 'next/script';

interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  totalTime?: string;
  estimatedCost?: {
    value: string;
    currency: string;
  };
  supply?: string[];
  tool?: string[];
  steps: HowToStep[];
  image?: string;
}

const HowToSchema = ({
  name,
  description,
  totalTime,
  estimatedCost,
  supply,
  tool,
  steps,
  image
}: HowToSchemaProps) => {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    ...(image && { "image": image }),
    ...(totalTime && { "totalTime": totalTime }),
    ...(estimatedCost && {
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": estimatedCost.currency,
        "value": estimatedCost.value
      }
    }),
    ...(supply && supply.length > 0 && {
      "supply": supply.map(item => ({
        "@type": "HowToSupply",
        "name": item
      }))
    }),
    ...(tool && tool.length > 0 && {
      "tool": tool.map(item => ({
        "@type": "HowToTool",
        "name": item
      }))
    }),
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "name": step.name,
      "text": step.text,
      "position": index + 1,
      ...(step.image && { "image": step.image }),
      ...(step.url && { "url": step.url })
    }))
  };

  return (
    <Script
      id="howto-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(howToSchema)
      }}
    />
  );
};

export default HowToSchema;