import styled from 'styled-components';
import { Main } from '../../styles/main';

export const StyledMain = styled(Main)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;

  .container-counter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    p {
      text-align: center;
      padding: 1rem 3rem;
    }
  }

  .counter {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 3rem;

    h1 {
      border: 1px solid var(--grey-0);
      border-radius: 10px;
      padding: 1rem 2rem;
      font-size: 89px;
    }
  }

  @media(min-width: 640px){
    button{
      max-width: 320px;
    }
  }
`;
