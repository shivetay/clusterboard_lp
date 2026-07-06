/** biome-ignore-all lint/style/noMagicNumbers: <styling> */
'use client';
import { styled } from '@mui/material';
import Link from 'next/link';
import { glassEffects } from '@/theme';

export const HeaderContainer = styled('header')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  minHeight: '54px',
  alignItems: 'center',
  marginBottom: theme.spacing(6),
  padding: theme.spacing(4, 2),
  paddingLeft: `max(${theme.spacing(2)}, env(safe-area-inset-left, 0px))`,
  paddingRight: `max(${theme.spacing(2)}, env(safe-area-inset-right, 0px))`,
  ...glassEffects.light,

  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: `max(${theme.spacing(1.5)}, env(safe-area-inset-left, 0px))`,
    paddingRight: `max(${theme.spacing(1.5)}, env(safe-area-inset-right, 0px))`,
  },
}));

export const LogoLink = styled(Link)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.05rem',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  minWidth: 'fit-content',
  transition: 'opacity 0.2s ease',
  '&:hover': {
    opacity: 0.9,
  },
}));

export const LogoAccent = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const LogoFull = styled('span')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const LogoCompact = styled('span')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'inline-flex',
    alignItems: 'center',
    letterSpacing: '0.12em',
  },
}));
