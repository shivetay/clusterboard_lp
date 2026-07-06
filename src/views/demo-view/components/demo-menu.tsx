'use client';

import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HiveOutlinedIcon from '@mui/icons-material/HiveOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import { Box } from '@mui/material';
import type { DemoView } from '@/content/demo/demo-mock-data';
import {
  MenuButton,
  MenuContainer,
  MobileProjectMenuStrip,
  NavLinkContainer,
} from '../styles/menu.styled';

interface MenuItemDef {
  menuId: string;
  view: DemoView;
  label: string;
  icon: React.ReactNode;
}

const CLUSTER_ITEMS: MenuItemDef[] = [
  { menuId: 'cluster', view: 'cluster', label: 'Cluster', icon: <HiveOutlinedIcon /> },
  { menuId: 'projects', view: 'projects', label: 'Projekty', icon: <TokenOutlinedIcon /> },
  { menuId: 'tasks', view: 'cluster', label: 'Zadania', icon: <ChecklistOutlinedIcon /> },
  {
    menuId: 'calendar',
    view: 'cluster',
    label: 'Kalendarz',
    icon: <CalendarMonthOutlinedIcon />,
  },
  {
    menuId: 'finance',
    view: 'cluster',
    label: 'Finanse',
    icon: <CurrencyExchangeOutlinedIcon />,
  },
  { menuId: 'messages', view: 'messages', label: 'Wiadomości', icon: <EmailOutlinedIcon /> },
];

const PROJECT_ITEMS: MenuItemDef[] = [
  { menuId: 'project-details', view: 'project', label: 'Szczegóły', icon: <TokenOutlinedIcon /> },
  { menuId: 'files', view: 'files', label: 'Pliki', icon: <AttachFileOutlinedIcon /> },
  {
    menuId: 'inspirations',
    view: 'inspirations',
    label: 'Inspiracje',
    icon: <InsertPhotoOutlinedIcon />,
  },
  { menuId: 'messages', view: 'messages', label: 'Wiadomości', icon: <EmailOutlinedIcon /> },
  {
    menuId: 'invitations',
    view: 'project',
    label: 'Zaproszenia',
    icon: <PeopleAltOutlinedIcon />,
  },
];

function getActiveMenuId(view: DemoView, isProjectContext: boolean): string {
  if (isProjectContext) {
    const map: Partial<Record<DemoView, string>> = {
      project: 'project-details',
      files: 'files',
      inspirations: 'inspirations',
      messages: 'messages',
    };
    return map[view] ?? 'project-details';
  }

  const map: Partial<Record<DemoView, string>> = {
    cluster: 'cluster',
    projects: 'projects',
    messages: 'messages',
  };
  return map[view] ?? 'cluster';
}

interface DemoMenuProps {
  view: DemoView;
  isProjectContext: boolean;
  onNavigate: (view: DemoView) => void;
}

export function DemoMenu({ view, isProjectContext, onNavigate }: DemoMenuProps) {
  const items = isProjectContext ? PROJECT_ITEMS : CLUSTER_ITEMS;
  const activeMenuId = getActiveMenuId(view, isProjectContext);

  const renderItem = (item: MenuItemDef, layout: 'desktopBar' | 'mobileStrip') => {
    const isActive = activeMenuId === item.menuId;
    const isStrip = layout === 'mobileStrip';

    return (
      <NavLinkContainer
        key={item.menuId}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onNavigate(item.view);
        }}
        sx={
          isStrip
            ? {
                width: '100%',
                minWidth: 0,
                display: 'block',
                textDecoration: 'none',
                padding: 0,
              }
            : { textDecoration: 'none' }
        }
      >
        <MenuButton
          active={isActive}
          startIcon={item.icon}
          sx={
            isStrip
              ? (theme) => ({
                  width: '100%',
                  minWidth: 0,
                  whiteSpace: 'normal',
                  textAlign: 'center',
                  py: 0.75,
                  px: 0.5,
                  flexDirection: 'column',
                  fontSize: theme.typography.caption.fontSize,
                  lineHeight: theme.typography.caption.lineHeight,
                  '& .MuiButton-startIcon': {
                    margin: 0,
                    marginBottom: theme.spacing(0.25),
                  },
                })
              : undefined
          }
        >
          {item.label}
        </MenuButton>
      </NavLinkContainer>
    );
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        px: { xs: 1.5, sm: 2 },
        boxSizing: 'border-box',
      }}
    >
      <MenuContainer>
        {items.map((item) => renderItem(item, 'desktopBar'))}
      </MenuContainer>
      {isProjectContext ? (
        <MobileProjectMenuStrip aria-label="Nawigacja projektu">
          {items.map((item) => renderItem(item, 'mobileStrip'))}
        </MobileProjectMenuStrip>
      ) : null}
    </Box>
  );
}
