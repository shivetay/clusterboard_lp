'use client';

import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import { Box, Radio } from '@mui/material';
import { useState } from 'react';
import type { DemoStage } from '@/content/demo/demo-mock-data';
import { DEMO_PROJECT } from '@/content/demo/demo-mock-data';
import {
  Header,
  Label,
  ProjectAddStageButton,
  ProjectDescription,
  ProjectHeaderContainer,
  ProjectInfoContainer,
  ProjectInvestorContainer,
  ProjectsActionsContainer,
  SectionDivider,
} from '../styles/project-detail-card.styled';
import {
  ActionButtons,
  ProjectStageContainer as ProjectStageContainerStyled,
  ProjectStageHeaderContainer,
  ProjectStageListContainer,
  StageButton,
  StageDescription,
  StageDivider,
} from '../styles/project-stage-container.styled';
import {
  CommentContainer,
  CommentDetails,
  CommentText,
  StageTaskContainer,
  TaskRadio,
} from '../styles/stage-task.styled';
import { DemoPageContainer } from './demo-page-container';
import { DemoPageHeader } from './demo-page-header';
import { DemoStatusTag } from './demo-status-tag';

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

interface DemoProjectDetailPanelProps {
  stages: DemoStage[];
  onToggleTask: (stageId: string, taskId: string) => void;
}

export function DemoProjectDetailPanel({
  stages,
  onToggleTask,
}: DemoProjectDetailPanelProps) {
  const [visibleStage, setVisibleStage] = useState<string | null>(
    stages[1]?.stage_name ?? null,
  );
  const [showComments, setShowComments] = useState<Set<string>>(new Set());

  return (
    <DemoPageContainer>
      <ProjectInfoContainer>
        <ProjectHeaderContainer>
          <Header variant="h3" as="h1" sx={{ margin: 0 }}>
            {DEMO_PROJECT.name}
          </Header>
          <DemoStatusTag status={DEMO_PROJECT.status} />
        </ProjectHeaderContainer>
        <ProjectDescription>{DEMO_PROJECT.description}</ProjectDescription>
        <SectionDivider />
        <ProjectInvestorContainer>
          <Box>
            <Label>Inwestorzy</Label>
            <DemoStatusTag investor={DEMO_PROJECT.investor} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Label>Data rozpoczęcia</Label>
            <Label>{formatDate(DEMO_PROJECT.startDate)}</Label>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Label>Data zakończenia</Label>
            <Label>{formatDate(DEMO_PROJECT.endDate)}</Label>
          </Box>
        </ProjectInvestorContainer>
        <ProjectsActionsContainer>
          <ProjectAddStageButton
            variant="outlined"
            startIcon={<PersonAddAltOutlinedIcon />}
            disabled
          >
            Dodaj inwestora
          </ProjectAddStageButton>
          <ProjectAddStageButton
            color="secondary"
            variant="outlined"
            startIcon={<PostAddOutlinedIcon />}
            disabled
          >
            Dodaj etap
          </ProjectAddStageButton>
        </ProjectsActionsContainer>
      </ProjectInfoContainer>

      <ProjectStageContainerStyled>
        <DemoPageHeader title="Etapy projektu" />
        {stages.map((stage) => (
          <ProjectStageListContainer key={stage.id}>
            <ProjectStageHeaderContainer>
              <StageButton
                isDisabled={stage.is_done}
                onClick={() =>
                  setVisibleStage((prev) =>
                    prev === stage.stage_name ? null : stage.stage_name,
                  )
                }
              >
                {stage.stage_name}
              </StageButton>
              <ActionButtons disabled={stage.is_done} startIcon={<PlaylistAddOutlinedIcon />} />
              <StageDivider isDisabled={stage.is_done} />
              <Box sx={{ display: 'flex', flexDirection: 'row', flexShrink: 0 }}>
                <ActionButtons disabled={stage.is_done} startIcon={<EditOutlinedIcon />} />
                <ActionButtons
                  disabled={stage.is_done}
                  startIcon={<CheckCircleOutlineOutlinedIcon />}
                />
                <ActionButtons
                  disabled={stage.is_done}
                  startIcon={<DeleteForeverOutlinedIcon />}
                />
              </Box>
            </ProjectStageHeaderContainer>
            <StageDescription as="h4" variant="h4">
              {stage.stage_description}
            </StageDescription>
            {visibleStage === stage.stage_name && stage.stage_tasks.length > 0 ? (
              <StageTaskContainer>
                {stage.stage_tasks.map((task) => (
                  <Box key={task.id}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <TaskRadio
                        disabled={stage.is_done}
                        control={
                          <Radio
                            checked={task.is_done}
                            onClick={() => onToggleTask(stage.id, task.id)}
                          />
                        }
                        label={task.task_name}
                      />
                      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        {task.task_comments && task.task_comments.length > 0 ? (
                          <ActionButtons
                            startIcon={<ChatBubbleOutlineOutlinedIcon />}
                            onClick={() =>
                              setShowComments((prev) => {
                                const next = new Set(prev);
                                if (next.has(task.id)) next.delete(task.id);
                                else next.add(task.id);
                                return next;
                              })
                            }
                          />
                        ) : null}
                        <ActionButtons disabled={task.is_done} startIcon={<MapsUgcOutlinedIcon />} />
                        <ActionButtons disabled={task.is_done} startIcon={<EditOutlinedIcon />} />
                        <ActionButtons disabled={task.is_done} startIcon={<DeleteForeverOutlinedIcon />} />
                      </Box>
                    </Box>
                    {showComments.has(task.id) &&
                      task.task_comments?.map((comment, i) => (
                        <CommentContainer key={i}>
                          <CommentDetails>
                            Autor: {comment.author_name} · {comment.updatedAt}
                          </CommentDetails>
                          <CommentText>{comment.comment_text}</CommentText>
                        </CommentContainer>
                      ))}
                  </Box>
                ))}
              </StageTaskContainer>
            ) : null}
          </ProjectStageListContainer>
        ))}
      </ProjectStageContainerStyled>
    </DemoPageContainer>
  );
}
