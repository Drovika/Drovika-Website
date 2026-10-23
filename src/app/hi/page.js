import HomeView from '@/components/pages/HomeView';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('home', 'hi');

export default function HomeHi() {
  return <HomeView lang="hi" />;
}
