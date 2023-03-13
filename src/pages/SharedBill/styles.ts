import styled from "styled-components";
import { Main } from "../../styles/main";

export const SharedBillMain = styled(Main)`
  & {
    display: flex;
    align-items: center;
    flex-flow: column;
    gap: 60px;
  }
`;
