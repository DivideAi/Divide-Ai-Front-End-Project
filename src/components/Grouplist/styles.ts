import styled from "styled-components";

export const StyledGroupList = styled.ul`
  & {
    display: flex;
    flex-flow: column;
    gap: 40px;

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px 60px;
    }
  }
`;
