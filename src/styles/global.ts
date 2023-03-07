import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    background-color: #34B9DA;
  }
  button{
    cursor: pointer;
    background-color: #FFFFFF;
    border-radius: 10px;
    color: #3295AD;
    font-weight: 700;
    padding: 1rem 5rem;

  }
  p{
    font-weight: 600;
    color: #FFFFFF;
    font-size: 16px;
    line-height: 20px;
  }
  h1{
    font-weight: 600;
    color: #FFFFFF;
    font-size: 50px;
    line-height: 61px;
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
