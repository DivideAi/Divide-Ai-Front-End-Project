import styled from 'styled-components';

export const Main = styled.main`
  & {
    padding: 40px 60px;

    @media screen and (min-width: 640px) {
      border: 2px solid var(--primary-50);
      border-radius: 10px;
      padding: 60px;
      width: 60%;
      margin: 2rem auto;

      
    }
  }
`;
