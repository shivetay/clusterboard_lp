'use client';

import { styled } from '@mui/material';

export const NavbarContainer = styled('nav')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));
