import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const DecoratedLink = styled(Link)`
  max-width: 200px;
  margin: 20px 0;
  padding: 10px 30px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #277a9d;
  border-radius: 50px;
  &:hover,
  &:focus {
    color: #212121;
  }
`;
