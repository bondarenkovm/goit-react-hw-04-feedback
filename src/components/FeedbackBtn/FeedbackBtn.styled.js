import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 15px;
`;
export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 15px;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: 250ms;
  background-color: ${({ id }) => {
    switch (id) {
      case 'good':
        return 'green';
      case 'neutral':
        return '#ffa200';
      case 'bad':
        return 'red';
      default:
        return 'black';
    }
  }};
  &:hover {
    scale: 1.05;
  }
  &:active {
    scale: 0.95;
    background-color: blue;
  }
`;
