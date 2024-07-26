import { Box, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import routeChildren from '@/routes/routeChildren';
import Logo from '@/assets/images/logo.svg';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <img src={Logo} alt="퀀텀에이아이 로고" />
      </StyledLogo>

      <StyledNav>
        <ul>
          {routeChildren.map((route) => {
            const routePath = route.path ?? '/';

            return (
              route.isInNav && (
                <li key={routePath}>
                  <NavLink to={routePath}>{route.name}</NavLink>
                </li>
              )
            );
          })}
        </ul>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled(Box)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  /* border-bottom: 1px solid ${({ theme }) => theme.palette.divider}; */
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.1);
`;

const StyledLogo = styled(Box)`
  width: 120px;
`;

const StyledNav = styled('nav')`
  font-size: 0.8rem;

  ul {
    display: flex;
    align-items: center;
    gap: 10px;

    > li > a {
      padding: 8px 12px;
      transition: color 0.2s ease-in;

      &:hover {
        opacity: 0.75;
      }

      &.active {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }
`;
