/**
 * Public app origin (authenticated product). Set `NEXT_PUBLIC_APP` in production
 * (e.g. `https://app.clusterboard.pl`).
 */
export function getAppUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_APP?.replace(/\/$/, '');
  if (fromEnv) {
    return fromEnv.startsWith('http') ? fromEnv : `https://${fromEnv}`;
  }
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }
  return 'https://app.clusterboard.pl';
}

export function appPath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${getAppUrl()}${normalized}`;
}
