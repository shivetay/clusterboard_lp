import { PageHeaderStyled } from '../styles/page-header.styled';

export function DemoPageHeader({ title }: { title: string }) {
  return (
    <PageHeaderStyled variant="h2" as="h2">
      {title}
    </PageHeaderStyled>
  );
}
