import styled from 'styled-components';

export const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  max-width: 480px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  list-style: none;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1400px;
  }
`;

export const Item = styled.li`
  width: 90%;
  display: block;
  text-decoration: none;
  height: 100%;
  border-radius: 10px;
  box-shadow: 4px 4px 5px 5px slategray;

  transition: transform 250ms ease-in-out;

  &:hover {
    cursor: zoom-in;
    transform: scale(1.03);
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 30px) / 2);
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 90px) / 4);
  }
`;
