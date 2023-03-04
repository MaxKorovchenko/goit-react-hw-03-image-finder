import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  display: ${({ total, items }) => (total === items.length ? 'none' : 'block')};
  margin: 20px auto 50px;
  border: none;
  color: white;
  border-radius: 4px;
  padding: 10px 18px;
  background-color: rgb(106, 103, 103);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 2px 2px 5px 3px slategray;

  transition: transform 200ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
