import { LandingNav } from './landing-nav';
import {
  HeaderContainer,
  LogoAccent,
  LogoCompact,
  LogoFull,
  LogoLink,
} from './header/header.styled';

export function LandingHeader() {
  return (
    <HeaderContainer>
      <LogoLink href="/" aria-label="Clusterboard home">
        <LogoFull>
          CLUSTER<LogoAccent>BOARD</LogoAccent>
        </LogoFull>
        <LogoCompact>
          C<LogoAccent>B</LogoAccent>
        </LogoCompact>
      </LogoLink>
      <LandingNav />
    </HeaderContainer>
  );
}
