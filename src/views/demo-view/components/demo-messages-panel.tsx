'use client';

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { CustomButton } from '@/components/ui/button';
import { DEMO_PROJECT } from '@/content/demo/demo-mock-data';
import { ActionButtons } from '../styles/project-stage-container.styled';
import {
  CommentContainer,
  CommentDetails,
  CommentText,
} from '../styles/stage-task.styled';
import {
  MessageListItem,
  MessagesDetailColumn,
  MessagesListColumn,
  MessagesListScrollArea,
  MessagesSplitContainer,
  MessageThreadRoot,
} from '../styles/messages-view.styled';
import { DemoPageContainer } from './demo-page-container';

export function DemoMessagesPanel() {
  const [selectedRootId, setSelectedRootId] = useState(
    DEMO_PROJECT.messageThreads[0]?.id ?? null,
  );

  const selectedThread = DEMO_PROJECT.messageThreads.find(
    (t) => t.id === selectedRootId,
  );

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
          Wiadomości
        </Typography>
        <MessagesSplitContainer>
          <MessagesListColumn>
            <CustomButton
              color="primary"
              variant="contained"
              sx={{ alignSelf: 'flex-start', flexShrink: 0, marginLeft: 0 }}
              disabled
            >
              Nowy wątek
            </CustomButton>
            <MessagesListScrollArea>
              {DEMO_PROJECT.messageThreads.map((root) => (
                <MessageListItem
                  key={root.id}
                  selected={root.id === selectedRootId}
                  onClick={() => setSelectedRootId(root.id)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedRootId(root.id);
                    }
                  }}
                >
                  <Typography variant="subtitle2" color="text.primary">
                    {root.author_name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {root.created_at}
                  </Typography>
                  <Typography variant="body2" color="text.tertiary" sx={{ mt: 0.5 }}>
                    {root.body}
                  </Typography>
                </MessageListItem>
              ))}
            </MessagesListScrollArea>
          </MessagesListColumn>
          <MessagesDetailColumn>
            {!selectedThread ? (
              <Typography variant="body2" color="text.secondary">
                Wybierz wątek z listy
              </Typography>
            ) : (
              <MessageThreadRoot>
                {selectedThread.replies.map((message) => (
                  <Box key={message.id} sx={{ mb: 2 }}>
                    <CommentContainer>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <CommentDetails>
                          Autor: {message.author_name}
                        </CommentDetails>
                        <Box sx={{ display: 'flex', gap: 0.5 }}>
                          <ActionButtons startIcon={<MapsUgcOutlinedIcon />} />
                          <ActionButtons startIcon={<EditOutlinedIcon />} />
                          <ActionButtons startIcon={<DeleteForeverOutlinedIcon />} />
                        </Box>
                      </Box>
                      <CommentText sx={{ whiteSpace: 'pre-wrap' }}>
                        {message.body}
                      </CommentText>
                      <CommentDetails>{message.created_at}</CommentDetails>
                    </CommentContainer>
                  </Box>
                ))}
              </MessageThreadRoot>
            )}
          </MessagesDetailColumn>
        </MessagesSplitContainer>
      </Box>
    </DemoPageContainer>
  );
}
