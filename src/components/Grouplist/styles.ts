import styled from "styled-components";

export const StyledGroupList = styled.ul`
  & {
    display: flex;
    flex-flow: column;
    gap: 40px;
    width: 100%;
    justify-items: center;

    @media screen and (min-width: 640px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 40px 60px;
    }

    @media screen and (min-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
