import HomeView from '@/components/pages/HomeView';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('home', 'en');

export default function Home() {
  return <HomeView lang="en" />;
}
