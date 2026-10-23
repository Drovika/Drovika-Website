// Website languages: English (/), हिंदी (/hi/), मराठी (/mr/).
// Each component keeps its own words: const T = { en: {...}, hi: {...}, mr: {...} }; const t = pick(T, lang);
// Legal pages (privacy, terms, refund, delete account) stay in English.
export const LANG_CODES = ['en', 'hi', 'mr'];
export const HTML_LANG = { en: 'en-IN', hi: 'hi-IN', mr: 'mr-IN' };

// Missing words fall back to English, so nothing is ever blank
export const pick = (T, lang = 'en') => ({ ...T.en, ...(T[lang] || {}) });

// Link inside the same language: lp('hi', '/#vehicles') → '/hi/#vehicles'. Legal pages and outside links stay as they are.
const ENGLISH_ONLY = ['/privacy', '/terms', '/refund', '/delete-account'];
export function lp(lang, href) {
  if (!lang || lang === 'en' || !href || !href.startsWith('/')) return href;
  if (ENGLISH_ONLY.some((p) => href.startsWith(p))) return href;
  return `/${lang}${href}`;
}

// 45 → "45 min" / "45 मिनट" / "45 मिनिटे"; 180 → "3 hrs" / "3 घंटे" / "3 तास"
export function fmtMinL(m, lang = 'en') {
  const hrs = m >= 60 && m % 60 === 0 ? m / 60 : null;
  if (lang === 'hi') return hrs ? `${hrs} घंटे` : `${m} मिनट`;
  if (lang === 'mr') return hrs ? `${hrs} तास` : `${m} मिनिटे`;
  return hrs ? `${hrs} hr${hrs > 1 ? 's' : ''}` : `${m} min`;
}
