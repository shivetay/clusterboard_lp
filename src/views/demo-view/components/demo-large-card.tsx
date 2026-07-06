'use client';

import SubdirectoryArrowRightOutlinedIcon from '@mui/icons-material/SubdirectoryArrowRightOutlined';
import { Box } from '@mui/material';
import {
  CardContainer,
  CardHeader,
  CardHelperText,
  CardWrapper,
  CountHeaderContainer,
  GridCardContainer,
  IconContainer,
  MainIconContainer,
  SpannedCardDescriptionHeader,
  SpannedCountHeader,
  SpannedMaxCountHeaderCount,
} from '../styles/card.styled';

interface DemoLargeCardProps {
  header: string;
  description?: string;
  count?: number;
  maxCount?: number | string;
  icon?: React.ReactNode;
  span?: number;
  onClick?: () => void;
}

export function DemoLargeCard({
  header,
  description,
  count,
  maxCount,
  icon,
  span = 2,
  onClick,
}: DemoLargeCardProps) {
  return (
    <GridCardContainer
      href="#"
      extended
      span={span}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
    >
      <CardWrapper sx={{ height: '100%' }} onClick={() => onClick?.()}>
        <CardContainer>
          <CardHeader>
            <MainIconContainer>
              {icon}
              <SpannedCardDescriptionHeader
                sx={{ fontSize: '1.88rem' }}
                variant="h2"
                as="h2"
              >
                {header}
              </SpannedCardDescriptionHeader>
            </MainIconContainer>
            <IconContainer>
              <SubdirectoryArrowRightOutlinedIcon />
            </IconContainer>
          </CardHeader>
          {description ? (
            <CountHeaderContainer>
              <SpannedCountHeader>{count}</SpannedCountHeader>
              <Box>
                <SpannedMaxCountHeaderCount variant="h2" as="h2">
                  / {`${maxCount}`}
                </SpannedMaxCountHeaderCount>
                <CardHelperText>{description}</CardHelperText>
              </Box>
            </CountHeaderContainer>
          ) : null}
        </CardContainer>
      </CardWrapper>
    </GridCardContainer>
  );
}
