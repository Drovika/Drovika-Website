import DriversView from '@/components/pages/DriversView';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('drivers', 'en');

export default function Drivers() {
  return <DriversView lang="en" />;
}
