import { Link } from "react-router-dom";
import styled from "styled-components";

export const NextButton = styled(Link)`
  & {
    background: #fff;
    border-radius: 8px;

    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: calc(18rem / 16);
    text-align: center;

    color: #3295ad;
    padding-bottom: 16px;
    padding-top: 16px;

    width: 320px;
    max-width: 100%;

    &:hover {
      background: red;
    }
  }
`;
