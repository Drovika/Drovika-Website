import HomeView from '@/components/pages/HomeView';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('home', 'mr');

export default function HomeMr() {
  return <HomeView lang="mr" />;
}
