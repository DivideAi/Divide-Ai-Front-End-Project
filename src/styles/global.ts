import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    background-color: #34B9DA;
  }
  button{
    cursor: pointer;
    background-color: #FFFFFF;
    border-radius: 10px;
    color: #3295AD;
  }
  p{
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: #FFFFFF;
    font-size: 16px;
  }
  h1{
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: #FFFFFF;
    font-size: 50px;
  }
  input{
    background-color: #34B9DA;
    border-radius: 10px;
    border: solid 1px #FFFFFF;
    
  }
  dialog{
    display: unset;
    position: unset;
  }
`;