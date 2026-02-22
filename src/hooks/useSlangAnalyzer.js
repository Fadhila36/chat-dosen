import { useState, useEffect } from 'react';

// Dictionary of common Indonesian slang/abbreviations
const SLANG_DICTIONARY = [
  "yg", "jgn", "dgn", "utk", "bkn", "bgt", "krn", "klo", "kalo", "karna", "krna",
  "dpt", "tlah", "sjk", "dr", "dri", "drpd", "spy", "sbg", "sm", "tpi", "tp",
  "udh", "udah", "sdh", "blm", "blum", "blom", "bnyk", "brp", "gmn", "gimana", 
  "bgmn", "bbrp", "dl", "dulu", "smpe", "smp", "skrg", "skrang", "bs", 
  "bso", "besok", "bsk", "tw", "gw", "gua", "gue", "lu", "loe",
  "aku", "km", "kamu", "sy", "sya", "mo", "hrs", "lg", 
  "jd", "jdi", "bgtu", "gitu", "gini", "mks", "mksd", "maksud", 
  "bbm", "wa", "ig", "fb", "twit", "otw", "asap",
  "btw", "fyi", "kuy", "skuy", "cmiiw", "lgsg", "bth",
  "bikin", "bt", "dikit", "sdkt", "ksh", "gtu",
  "cpt", "cepet", "lmbat", "kpn", "dmn", "knp", "kenapa", "gpp",
  "ngga", "nggak", "ga", "gak", "gk", "tdk", "trm", "makasih", "mksh",
  "trs", "trus", "bgs", "biy", "bro", "sis", "gan", "kaka", "kak", "k"
];

/**
 * Custom hook to analyze text for slang and abbreviations
 * @param {string} text - The input text to analyze
 * @returns {object} - { hasSlang: boolean, detectedSlangs: string[] }
 */
export function useSlangAnalyzer(text) {
  const [detectedSlangs, setDetectedSlangs] = useState([]);
  const hasSlang = detectedSlangs.length > 0;

  useEffect(() => {
    if (!text) {
      setDetectedSlangs([]);
      return;
    }

    // Convert text to lowercase and remove punctuation
    const cleanText = text.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, " ");
    const words = cleanText.split(/\s+/).filter(word => word.length > 0);
    
    // Find unique slang words
    const foundSlangs = words.filter(word => SLANG_DICTIONARY.includes(word));
    const uniqueSlangs = [...new Set(foundSlangs)];
    
    setDetectedSlangs(uniqueSlangs);

  }, [text]);

  return { hasSlang, detectedSlangs };
}
