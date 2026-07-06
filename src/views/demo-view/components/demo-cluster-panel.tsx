'use client';

import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import type { DemoView } from '@/content/demo/demo-mock-data';
import { ClusterCardContainer, ClusterViewShell } from '../styles/cluster-view.styled';
import { DemoCard } from './demo-card';
import { DemoLargeCard } from './demo-large-card';
import { DemoPageContainer } from './demo-page-container';

interface DemoClusterPanelProps {
  doneTasks: number;
  totalTasks: number;
  onNavigate: (view: DemoView) => void;
}

export function DemoClusterPanel({
  doneTasks,
  totalTasks,
  onNavigate,
}: DemoClusterPanelProps) {
  return (
    <DemoPageContainer>
      <ClusterViewShell>
        <ClusterCardContainer>
          <DemoCard
            header="Zadania"
            description="Aktywne zadania"
            count={doneTasks}
            maxCount={totalTasks}
            icon={<ChecklistOutlinedIcon />}
          />
          <DemoCard
            header="Kalendarz"
            description="Aktywne spotkania"
            count={2}
            icon={<CalendarMonthOutlinedIcon />}
          />
          <DemoCard
            header="Finanse"
            description="Finanse"
            icon={<CurrencyExchangeOutlinedIcon />}
          />
          <DemoLargeCard
            header="Projekty"
            description="Aktywne projekty"
            count={1}
            maxCount={1}
            icon={<TokenOutlinedIcon />}
            onClick={() => onNavigate('projects')}
          />
          <DemoCard
            header="Wiadomości"
            description="Oczekujące wiadomości"
            count={1}
            icon={<EmailOutlinedIcon />}
            onClick={() => onNavigate('messages')}
          />
        </ClusterCardContainer>
      </ClusterViewShell>
    </DemoPageContainer>
  );
}
