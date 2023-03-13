import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  :root {
    --primary: #34B9DA;
    --primary-50: #3295AD;

    --grey-50: #AFACAC;
    --grey-0: #FFFFFF;

    --sucess: #55E655;
    --negative: #E65555;
    --information: #FFDD55;
    --warning: #155BCB;
  }

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    font-family: 'Montserrat';
  }

  body {
    background: var(--primary);
  }

  button, .Link{
    cursor: pointer;
    background-color: var(--grey-0);
    border-radius: 10px;
    color: var(--primary-50);
    font-weight: 700;
    font-size: calc(13rem/16);
    padding: 1rem 5rem;
    text-align: center;
  }

  p{
    font-weight: 600;
    color: var(--grey-0);
    line-height: 20px;
  }

  h1{
    font-weight: 600;
    color: var(--grey-0);
    line-height: 61px;
  }

  form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 600px;
  }

  input{
    background-color: var(--primary);
    border-radius: 10px;
    border: solid 1px var(--grey-0);
    width: 100%;
    max-width: 320px;
  }

  img.Waiter{
    height: 120px;
    width: 120px;
  }
`;
