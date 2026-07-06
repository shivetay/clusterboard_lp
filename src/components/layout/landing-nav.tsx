'use client';

import { useTranslation } from 'react-i18next';
import { CustomButton } from '@/components/ui/button';
import { appPath } from '@/lib/app-url';
import { TRANSLATION_GROUPS } from '@/locales/pl/locales';
import { NavbarContainer } from './navbar.styled';

export function LandingNav() {
  const { t } = useTranslation();

  return (
    <NavbarContainer>
      <CustomButton href={appPath('/sign-in')}>
        {t(TRANSLATION_GROUPS.COMMON.LOGIN_BTN)}
      </CustomButton>
      <CustomButton href={appPath('/sign-up')}>
        {t(TRANSLATION_GROUPS.COMMON.REGISTER_BTN)}
      </CustomButton>
    </NavbarContainer>
  );
}
