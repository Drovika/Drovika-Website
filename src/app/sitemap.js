import { site } from '@/config/site';
import { PAGES, pageUrl } from '@/lib/meta';

export const dynamic = 'force-static';

// Every page in English, Hindi and Marathi (each one lists its other-language copies), then the English-only legal pages
export default function sitemap() {
  const now = new Date();
  const translated = PAGES.flatMap((page) => ['en', 'hi', 'mr'].map((lang) => ({
    url: `${site.url}${pageUrl(lang, page)}`,
    lastModified: now,
    changeFrequency: page === 'home' ? 'weekly' : 'monthly',
    priority: page === 'home' ? (lang === 'en' ? 1 : 0.9) : 0.6,
    alternates: { languages: { 'en-IN': `${site.url}${pageUrl('en', page)}`, 'hi-IN': `${site.url}${pageUrl('hi', page)}`, 'mr-IN': `${site.url}${pageUrl('mr', page)}` } },
  })));
  const legal = ['privacy/', 'terms/', 'refund/', 'delete-account/'].map((p) => ({
    url: `${site.url}/${p}`, lastModified: now, changeFrequency: 'monthly', priority: 0.4,
  }));
  return [...translated, ...legal];
}
