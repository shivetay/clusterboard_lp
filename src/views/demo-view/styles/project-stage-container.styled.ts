/** biome-ignore-all lint/style/noMagicNumbers: <styled> */
'use client';
import { Box, Divider, styled, Typography } from '@mui/material';
import { CustomButton } from '@/components/ui';
import { glassEffects } from '@/theme';

export const ProjectStageContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

export const ProjectStageListContainer = styled(Box)(({ theme }) => ({
  ...glassEffects.medium,
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

export const ProjectStageHeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  flexWrap: 'nowrap',
  minWidth: 0,

  maxHeight: '22px',
  gap: theme.spacing(1),
}));

export const StageButton = styled(CustomButton, {
  shouldForwardProp: (prop) => prop !== 'isDisabled',
})<{ isDisabled: boolean }>(({ theme, isDisabled }) => ({
  flexShrink: 0,
  padding: 0,
  margin: 0,

  maxHeight: '22px !important',
  height: '22px !important',
  minHeight: '22px !important',
  backgroundColor: isDisabled
    ? theme.palette.background.primaryTransparent
    : theme.palette.background.gradientText,
  color: theme.palette.text.dark,
  fontSize: theme.typography.body2.fontSize,

  '&:hover': {
    backgroundColor: isDisabled
      ? theme.palette.background.primaryTransparent
      : theme.palette.background.gradientText,
    color: theme.palette.text.dark,
  },
}));

export const StageDivider = styled(Divider, {
  shouldForwardProp: (prop) => prop !== 'isDisabled',
})<{ isDisabled: boolean }>(({ theme, isDisabled }) => {
  const primaryColor = theme.palette.text.secondary;
  const faded = theme.palette.background.primaryTransparent;
  return {
    flex: '1 1 auto',
    minWidth: theme.spacing(2),
    width: 'auto',
    maxWidth: '100%',
    margin: 0,
    alignSelf: 'center',
    backgroundImage: isDisabled
      ? `linear-gradient(to right, ${faded}, ${faded})`
      : `linear-gradient(to right, ${primaryColor}, ${faded})`,
    borderColor: primaryColor,
    height: '1px',
    border: 'none',
  };
});

export const StageDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.tertiary,

  fontSize: theme.typography.body2.fontSize,
}));

export const ActionButtons = styled(CustomButton)(({ theme }) => ({
  flexShrink: 0,
  padding: 0,
  margin: 0,
  marginLeft: theme.spacing(1),
  minWidth: '24px',

  '& svg': {
    transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.background.gradientText,
  },
}));
