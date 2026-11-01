import ServiceView from '@/components/pages/ServiceView';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('areas', 'hi');

export default function AreasHi() {
  return <ServiceView slug="areas" lang="hi" />;
}
