'use client';

import SubdirectoryArrowRightOutlinedIcon from '@mui/icons-material/SubdirectoryArrowRightOutlined';
import { CardContent } from '@mui/material';
import {
  CardContainer,
  CardHeader,
  CardHelperText,
  CardWrapper,
  CountHeader,
  CountHeaderContainer,
  CountHeaderCount,
  DescriptionHeader,
  GridCardContainer,
  IconContainer,
  MainIconContainer,
} from '../styles/card.styled';

interface DemoCardProps {
  header: string;
  description?: string;
  count?: number;
  maxCount?: number | string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function DemoCard({
  header,
  description,
  count,
  maxCount,
  icon,
  onClick,
}: DemoCardProps) {
  return (
    <GridCardContainer
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
    >
      <CardWrapper onClick={() => onClick?.()}>
        <CardContainer>
          <CardContent sx={{ padding: 0, marginBottom: 0 }}>
            <CardHeader>
              <MainIconContainer>{icon}</MainIconContainer>
              <IconContainer>
                <SubdirectoryArrowRightOutlinedIcon />
              </IconContainer>
            </CardHeader>
            {description ? (
              <>
                <DescriptionHeader variant="h3" as="h3">
                  {header}
                </DescriptionHeader>
                <CountHeaderContainer>
                  <CountHeader>{count}</CountHeader>
                  {maxCount !== undefined ? (
                    <CountHeaderCount>{`${maxCount}`}</CountHeaderCount>
                  ) : null}
                </CountHeaderContainer>
              </>
            ) : null}
            <CardHelperText>{description}</CardHelperText>
          </CardContent>
        </CardContainer>
      </CardWrapper>
    </GridCardContainer>
  );
}
