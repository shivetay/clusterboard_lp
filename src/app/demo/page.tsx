import type { Metadata } from 'next';
import { DemoView } from '@/views/demo-view';

export const metadata: Metadata = {
  title: 'Demo — Cluster Board',
  description:
    'Interaktywne demo Cluster Board — zobacz jak wygląda tablica projektowa bez rejestracji.',
  robots: { index: true, follow: true },
};

export default function DemoPage() {
  return <DemoView />;
}
