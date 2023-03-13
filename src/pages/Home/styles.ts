import styled from 'styled-components';
import { Main } from '../../styles/main';

export const StyledHomePage = styled(Main)`
  display: flex;
  flex-direction: column;

  img {
    width: 220px;
    height: 145.26px;
    margin: 0 auto;
  }

  p {
    display: block;
    width: 240px;
    margin: 0 auto;
    padding-top: 60px;
    margin-bottom: 70px;
  }

  .Link_style {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    margin: 20px auto;
    max-width: 320px;
    width: 100%;
    height: 45px;
    color: #3295ad;
    background-color: var(--grey-0);
    border: none;
    border-radius: 10px;
    font-size: 1.125rem;
    font-weight: 700;
  }
`;
