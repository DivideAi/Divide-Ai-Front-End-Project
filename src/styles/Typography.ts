import { createGlobalStyle, css } from 'styled-components';

const defaultText = css`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-align: center;
  color: var(--grey-0);
`;

export const Typography = createGlobalStyle`
  .Title1 {
    ${defaultText}
    font-size: calc(40rem/16);
  }
  .Title2 {
    ${defaultText}
    font-size: calc(32rem/16);
  }
  .Title3 {
    ${defaultText}
    font-weight: 700 !important;
    font-size: calc(18rem/16);
  }

  .Body-600 {
    ${defaultText}
    font-size: calc(16rem/16);
  }
  .Body-small {
    ${defaultText}
    font-size: calc(12rem/16);
  }
`;
