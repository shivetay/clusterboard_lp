'use client';

import { useTranslation } from 'react-i18next';
import { appPath } from '@/lib/app-url';
import {
  FooterContact,
  FooterContainer,
  FooterContent,
} from './footer/footer.styled';

export function LandingFooter() {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterContent>
        <span>
          <a href={appPath('/privacy')}>{t('FOOTER_PRIVACY_POLICY')}</a> |{' '}
          <a href={appPath('/cookies')}>{t('FOOTER_COOKIES')}</a> |{' '}
          <a href={appPath('/terms')}>{t('FOOTER_TERMS_OF_USE')}</a> |{' '}
          <a href={appPath('/owu')}>{t('FOOTER_OWU')}</a>
        </span>
        <span> &copy; 2025 Cluster Board Łukasz Dawidowicz</span>
      </FooterContent>
      <FooterContact>
        <span>
          kontakt: kontakt@clusterboard.pl |{' '}
          <a
            href="https://discord.gg/5KSzKC5334"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('FOOTER_DISCORD')}
          </a>
        </span>
      </FooterContact>
    </FooterContainer>
  );
}
