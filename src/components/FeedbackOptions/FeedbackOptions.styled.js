import styled from '@emotion/styled';
export const Box = styled.div`
  display: flex;
`;
export const Button = styled.button`
  &:not(:last-child) {
    margin-right: 30px;
  }
  font-size: 25px;
  text-transform: uppercase;
  padding: 15px 30px;
  background-color: #232957;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #151b4b;
    box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.75);
  }
`;
