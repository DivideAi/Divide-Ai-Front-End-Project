import styled from "styled-components";
import { Link } from "react-router-dom";

export const NextButton = styled(Link)`
  & {
    background: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 10px;
    color: #3295ad;

    font-weight: 700;
    font-size: calc(18rem / 16);
    text-align: center;

    padding: 16px 0;
    max-width: 100%;
    width: 320px;
  }
`;
