import styled from 'styled-components';

export const StyledHomePage = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 50px;

  @media (min-width: 640px) {
    border: 2px solid #3295ad;
    border-radius: 10px;
    padding: 3rem;
    width: 60%;
    margin: 2rem auto;
  }

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
    width: 320px;
    height: 45px;
    color: #3295ad;
    background-color: var(--grey-0);
    border: none;
    border-radius: 10px;
    font-size: 1.125rem;
    font-weight: 700;
  }
`;
