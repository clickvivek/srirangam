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

export const getDictionary = async (locale: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn') => {
  if (!dictionaries[locale]) {
    return dictionaries['en'];
  }
  return dictionaries[locale];
};
