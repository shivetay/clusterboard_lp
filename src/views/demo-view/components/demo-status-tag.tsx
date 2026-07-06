import { StatusTagStyled } from '../styles/status-tag.styled';

type TStatus = 'zakończony' | 'w toku' | 'w przygotowaniu';

interface DemoStatusTagProps {
  status?: TStatus;
  investor?: string;
}

export function DemoStatusTag({ status, investor }: DemoStatusTagProps) {
  return <StatusTagStyled label={investor || status} />;
}
