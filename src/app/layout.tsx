import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import { LandingFooter, LandingHeader } from '@/components';
import { LandingLayoutShell } from '@/components/layout/landing-layout-shell';
import { I18nProvider } from '@/providers';
import { ThemeProvider } from '@/theme';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Cluster Board',
  description: 'Cluster Board — tablica projektowa dla zespołów i klientów',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={poppins.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <I18nProvider locale="pl">
            <LandingLayoutShell
              header={<LandingHeader />}
              footer={<LandingFooter />}
            >
              {children}
            </LandingLayoutShell>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
