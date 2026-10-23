import AboutView from '@/components/pages/AboutView';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('about', 'en');

export default function About() {
  return <AboutView lang="en" />;
}
