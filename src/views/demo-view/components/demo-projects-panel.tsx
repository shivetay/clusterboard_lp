'use client';

import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { CardActionArea, CardContent } from '@mui/material';
import { DEMO_PROJECT, type DemoView } from '@/content/demo/demo-mock-data';
import {
  CardContainer,
  InvestorText,
  ProjectCardLink,
  ProjectDateContainer,
  ProjectInfoContainer,
  ProjectInvestors,
  ProjectTitle,
  ProjectTitleContainer,
} from '../styles/projects-card.styled';
import {
  ActionContainer,
  ActionContainerHeader,
  ProjectsContainer,
  ProjectsCount,
  ProjectsQuotaRow,
} from '../styles/projects-view.styled';
import { DemoHexDecor } from './demo-hex-decor';
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

interface DemoProjectsPanelProps {
  onNavigate: (view: DemoView) => void;
}

export function DemoProjectsPanel({ onNavigate }: DemoProjectsPanelProps) {
  return (
    <DemoPageContainer>
      <ActionContainer>
        <ActionContainerHeader>
          <DemoPageHeader title="Aktywne projekty" />
          <ProjectsQuotaRow>
            <ProjectsCount>1/1</ProjectsCount>
          </ProjectsQuotaRow>
        </ActionContainerHeader>
      </ActionContainer>
      <ProjectsContainer>
        <ProjectCardLink
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('project');
          }}
        >
          <CardActionArea>
            <CardContainer>
              <DemoHexDecor />
              <CardContent>
                <ProjectTitleContainer>
                  <ProjectTitle variant="h4" component="h4">
                    {DEMO_PROJECT.name}
                  </ProjectTitle>
                  <DemoStatusTag status={DEMO_PROJECT.status} />
                </ProjectTitleContainer>
                <ProjectInfoContainer>
                  <ProjectInvestors>
                    <GroupsOutlinedIcon />
                    <InvestorText>{DEMO_PROJECT.investor}</InvestorText>
                  </ProjectInvestors>
                  <ProjectDateContainer>
                    <CalendarMonthOutlinedIcon />
                    <span>{formatDate(DEMO_PROJECT.startDate)}</span>
                    <span>{formatDate(DEMO_PROJECT.endDate)}</span>
                  </ProjectDateContainer>
                </ProjectInfoContainer>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  Szczegóły <KeyboardArrowRightOutlinedIcon fontSize="small" />
                </span>
              </CardContent>
            </CardContainer>
          </CardActionArea>
        </ProjectCardLink>
      </ProjectsContainer>
    </DemoPageContainer>
  );
}
