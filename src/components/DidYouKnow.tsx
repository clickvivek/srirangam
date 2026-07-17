"use client";

import React, { useState, useEffect } from 'react';
import didYouKnowData from '../data/didYouKnow.json';

export default function DidYouKnow({ lang }: { lang: string }) {
  const [factIndex, setFactIndex] = useState<number | null>(null);

  useEffect(() => {
    // Pick a random fact on mount to avoid hydration mismatch
    setFactIndex(Math.floor(Math.random() * didYouKnowData.length));
  }, []);

  if (factIndex === null) {
    return null; // Render nothing during SSR to avoid mismatch
  }

  const fact = didYouKnowData[factIndex];
  const factText = (fact as Record<string, string>)[lang] || (fact as Record<string, string>)['en'];
  
  const didYouKnowLabel = lang === 'ta' ? 'உங்களுக்குத் தெரியுமா?' : 'Did you know?';

  return (
    <>
      <strong>{didYouKnowLabel}</strong> {factText}
    </>
  );
}
