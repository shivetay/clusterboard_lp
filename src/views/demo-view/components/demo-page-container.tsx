import type { PropsWithChildren } from 'react';
import { Container } from '@/components/layout/page-container/page-container.styled';

export function DemoPageContainer({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}
