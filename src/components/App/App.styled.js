import styled from 'styled-components';

export const Image = styled.img`
  display: block;
  height: auto;
  max-width: 480px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1400px;
  }
`;
