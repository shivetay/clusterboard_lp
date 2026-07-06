'use client';

import { Typography } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import {
  DEMO_PROJECT,
  type DemoStage,
  type DemoView,
} from '@/content/demo/demo-mock-data';
import { DemoBanner } from './styles/demo-banner.styled';
import { DemoClusterPanel } from './components/demo-cluster-panel';
import { DemoFilesPanel } from './components/demo-files-panel';
import { DemoHeader } from './components/demo-header';
import { DemoInspirationsPanel } from './components/demo-inspirations-panel';
import { DemoMenu } from './components/demo-menu';
import { DemoMessagesPanel } from './components/demo-messages-panel';
import { DemoProjectDetailPanel } from './components/demo-project-detail-panel';
import { DemoProjectsPanel } from './components/demo-projects-panel';

export function DemoView() {
  const [view, setView] = useState<DemoView>('cluster');
  const [stages, setStages] = useState<DemoStage[]>(DEMO_PROJECT.stages);

  const isProjectContext = ['project', 'files', 'inspirations', 'messages'].includes(
    view,
  );

  const navigate = useCallback((target: DemoView) => {
    setView(target);
  }, []);

  const toggleTask = useCallback((stageId: string, taskId: string) => {
    setStages((prev) =>
      prev.map((stage) =>
        stage.id === stageId
          ? {
              ...stage,
              stage_tasks: stage.stage_tasks.map((task) =>
                task.id === taskId ? { ...task, is_done: !task.is_done } : task,
              ),
            }
          : stage,
      ),
    );
  }, []);

  const { doneTasks, totalTasks } = useMemo(() => {
    const done = stages.reduce(
      (acc, s) => acc + s.stage_tasks.filter((t) => t.is_done).length,
      0,
    );
    const total = stages.reduce((acc, s) => acc + s.stage_tasks.length, 0);
    return { doneTasks: done, totalTasks: total };
  }, [stages]);

  return (
    <>
      <DemoHeader onLogoClick={() => navigate('cluster')} />
      <DemoBanner>
        <Typography variant="body2">
          Wersja demonstracyjna — dane przykładowe. Kliknij elementy, aby zobaczyć jak działa
          tablica.
        </Typography>
      </DemoBanner>
      <DemoMenu view={view} isProjectContext={isProjectContext} onNavigate={navigate} />

      {view === 'cluster' && (
        <DemoClusterPanel
          doneTasks={doneTasks}
          totalTasks={totalTasks}
          onNavigate={navigate}
        />
      )}
      {view === 'projects' && <DemoProjectsPanel onNavigate={navigate} />}
      {view === 'project' && (
        <DemoProjectDetailPanel stages={stages} onToggleTask={toggleTask} />
      )}
      {view === 'files' && <DemoFilesPanel />}
      {view === 'inspirations' && <DemoInspirationsPanel />}
      {view === 'messages' && <DemoMessagesPanel />}
    </>
  );
}

export default DemoView;
