import AboutView from '@/components/pages/AboutView';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('about', 'mr');

export default function AboutMr() {
  return <AboutView lang="mr" />;
}
