import AboutView from '@/components/pages/AboutView';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('about', 'hi');

export default function AboutHi() {
  return <AboutView lang="hi" />;
}
