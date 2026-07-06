'use client';

import { Avatar } from '@mui/material';
import { CustomButton } from '@/components/ui/button';
import {
  HeaderContainer,
  LogoAccent,
  LogoCompact,
  LogoFull,
  LogoLink,
} from '@/components/layout/header/header.styled';
import { appPath } from '@/lib/app-url';
import { NavbarContainer, UserAvatar } from '../styles/navbar.styled';

interface DemoHeaderProps {
  onLogoClick: () => void;
}

export function DemoHeader({ onLogoClick }: DemoHeaderProps) {
  return (
    <HeaderContainer>
      <LogoLink
        href="/demo"
        onClick={(e) => {
          e.preventDefault();
          onLogoClick();
        }}
      >
        <LogoFull>
          CLUSTER<LogoAccent>BOARD</LogoAccent>
        </LogoFull>
        <LogoCompact>
          C<LogoAccent>B</LogoAccent>
        </LogoCompact>
      </LogoLink>
      <NavbarContainer>
        <CustomButton variant="outlined" size="small" href="/">
          Strona główna
        </CustomButton>
        <CustomButton
          color="primary"
          variant="contained"
          size="small"
          href={appPath('/sign-up')}
        >
          Załóż konto
        </CustomButton>
        <UserAvatar>
          <Avatar sx={{ width: 32, height: 32, fontSize: '0.75rem' }}>KN</Avatar>
        </UserAvatar>
      </NavbarContainer>
    </HeaderContainer>
  );
}
