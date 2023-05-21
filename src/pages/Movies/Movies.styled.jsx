import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`;
export const Input = styled.input`
  width: 300px;
  font-size: 16px;
`;
export const Button = styled.button`
  max-width: 200px;
  padding: 10px 30px;
  display: flex;
  gap: 10px;
  border: none;
  align-items: center;
  font-size: 16px;
  justify-content: center;
  color: #fff;
  background-color: #277a9d;
  border-radius: 50px;
  &:hover,
  &:focus {
    color: #212121;
  }
`;
