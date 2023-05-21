import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
`;
export const Header = styled.header`
  padding: 20px 0;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.14),
    0px 4px 1px rgba(0, 0, 0, 0.2);
`;
export const StyledLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  &.active {
    color: #277a9d;
  }
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
