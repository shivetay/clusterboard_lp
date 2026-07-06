'use client';

import { Description, Download } from '@mui/icons-material';
import { Box, ListItemText, Typography } from '@mui/material';
import { DEMO_PROJECT } from '@/content/demo/demo-mock-data';
import { ActionButtons } from '../styles/project-stage-container.styled';
import { FileGridCard } from '../styles/FileUpload.styled';
import { DemoPageContainer } from './demo-page-container';

export function DemoFilesPanel() {
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
          Pliki
        </Typography>
        <Typography variant="caption" sx={{ display: 'block', mb: 2 }}>
          Dokumenty: {DEMO_PROJECT.files.length} / 3
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
              md: 'repeat(3, minmax(0, 1fr))',
            },
            gap: 2,
          }}
        >
          {DEMO_PROJECT.files.map((file) => (
            <FileGridCard key={file.id} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <Description />
                <ListItemText
                  primary={
                    <Typography variant="body2" noWrap title={file.file_name}>
                      {file.file_name}
                    </Typography>
                  }
                  secondary={
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
                      <Typography variant="caption" color="text.secondary">
                        {file.file_size}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {file.uploaded_at}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" noWrap>
                        {file.uploaded_by_name}
                      </Typography>
                    </Box>
                  }
                />
              </Box>
              <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                <ActionButtons startIcon={<Download />} />
              </Box>
            </FileGridCard>
          ))}
        </Box>
      </Box>
    </DemoPageContainer>
  );
}
