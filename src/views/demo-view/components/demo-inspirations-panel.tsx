'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { DEMO_PROJECT } from '@/content/demo/demo-mock-data';
import { DemoPageContainer } from './demo-page-container';

export function DemoInspirationsPanel() {
  return (
    <DemoPageContainer>
      <Box sx={{ mt: { xs: 2, sm: 3 }, minWidth: 0 }}>
        <Typography
          variant="h4"
          sx={(theme) => ({
            mb: { xs: 1.5, sm: 2 },
            fontSize: {
              xs: theme.typography.h5.fontSize,
              sm: theme.typography.h4.fontSize,
            },
          })}
        >
          Inspiracje
        </Typography>
        <Typography variant="caption" sx={{ display: 'block', mb: 2 }}>
          Inspiracje: {DEMO_PROJECT.inspirations.length} / 8
        </Typography>
        <Box>
          {DEMO_PROJECT.inspirations.map((insp) => (
            <Box key={insp.id} sx={{ display: 'inline-block', m: 1 }}>
              <Image
                src={insp.imageUrl}
                alt={insp.title}
                width={200}
                height={200}
                style={{ objectFit: 'cover' }}
              />
              <Typography variant="caption" sx={{ display: 'block', mt: 0.5 }}>
                {insp.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </DemoPageContainer>
  );
}
