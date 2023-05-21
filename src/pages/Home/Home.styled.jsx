import styled from 'styled-components';
export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin: 20px 0;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const ItemList = styled.li`
  font-size: 16px;
  &:hover,
  &:focus {
    font-weight: 700;
  }
`;
