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
    background-color: var(--primary); ////////////////////////////////////////////////////// remover
    font-family: 'Montserrat';
  }

  body {
    background: var(--primary);
  }

  button{
    cursor: pointer;
    background-color: var(--grey-0);
    border-radius: 10px;
    color: #3295AD;
    font-weight: 700;
    padding: 1rem 5rem;
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

  input{
    background-color: var(--primary);
    border-radius: 10px;
    border: solid 1px var(--grey-0);
  }

  dialog{
    display: unset;
    position: unset;
  }

  img.Waiter{
    height: 120px;
    width: 120px;
  }
`;
