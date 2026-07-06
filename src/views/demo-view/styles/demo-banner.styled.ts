'use client';

import { Box, styled } from '@mui/material';
import { glassEffects } from '@/theme';

export const DemoBanner = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
  flexWrap: 'wrap',
  margin: theme.spacing(0, 2, 2),
  padding: theme.spacing(1.25, 2),
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.text.tertiary,
  fontSize: theme.typography.body2.fontSize,
  ...glassEffects.light,
  borderColor: `${theme.palette.primary.main}44`,
}));
