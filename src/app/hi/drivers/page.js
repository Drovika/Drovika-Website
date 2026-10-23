import DriversView from '@/components/pages/DriversView';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('drivers', 'hi');

export default function DriversHi() {
  return <DriversView lang="hi" />;
}
