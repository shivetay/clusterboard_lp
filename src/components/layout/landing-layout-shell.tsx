'use client';

import { usePathname } from 'next/navigation';
import { LayoutContainer } from '@/app/layout.styled';

interface LandingLayoutShellProps {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}

export function LandingLayoutShell({
  header,
  footer,
  children,
}: LandingLayoutShellProps) {
  const pathname = usePathname();
  const isDemo = pathname?.startsWith('/demo');

  if (isDemo) {
    return <LayoutContainer>{children}</LayoutContainer>;
  }

  return (
    <LayoutContainer>
      {header}
      {children}
      {footer}
    </LayoutContainer>
  );
}
