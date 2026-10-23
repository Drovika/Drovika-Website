import DriversView from '@/components/pages/DriversView';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('drivers', 'mr');

export default function DriversMr() {
  return <DriversView lang="mr" />;
}
