import 'server-only';
import en from './dictionaries/en.json';
import ta from './dictionaries/ta.json';
import hi from './dictionaries/hi.json';
import te from './dictionaries/te.json';
import ml from './dictionaries/ml.json';
import kn from './dictionaries/kn.json';

const dictionaries = {
  en,
  ta,
  hi,
  te,
  ml,
  kn
};

// Simple deep merge to ensure fallback to English
function deepMerge(target: any, source: any) {
  const output = { ...target };
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object && !Array.isArray(source[key])) {
      if (!(key in target)) {
        Object.assign(output, { [key]: source[key] });
      } else {
        output[key] = deepMerge(target[key], source[key]);
      }
    } else {
      Object.assign(output, { [key]: source[key] });
    }
  }
  return output;
}

export const getDictionary = async (locale: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn') => {
  if (!dictionaries[locale] || locale === 'en') {
    return dictionaries['en'];
  }
  // Deep merge English as the base, then overlay the requested locale
  return deepMerge(dictionaries['en'], dictionaries[locale]);
};
