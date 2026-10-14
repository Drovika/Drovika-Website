import { site } from '@/config/site';

export const dynamic = 'force-static';

export default function sitemap() {
  const pages = ['', 'drivers/', 'about/', 'contact/', 'privacy/', 'terms/', 'delete-account/'];
  return pages.map((p) => ({
    url: `${site.url}/${p}`,
    lastModified: new Date(),
    changeFrequency: p ? 'monthly' : 'weekly',
    priority: p ? 0.6 : 1,
  }));
}
