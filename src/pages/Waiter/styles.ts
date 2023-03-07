import styled from "styled-components";

export const StyledMain = styled.main`
  & {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 60px;
    width: 100%;
    margin: 0 auto;
  }
  div.option-button {
    display: flex;
    flex-flow: row nowrap;
    border: solid 2px #fff;
    border-radius: 8px;
    font-weight: 600;
    font-size: calc(36rem / 16);

    button {
      all: unset;
      background: #3295ad;
      color: #ffffff;
      padding: 16px;
      width: 50%;
      &:hover {
        background: red;
      }

      &.no {
        border-left: solid 1px #fff;
        border-radius: 0px 6px 6px 0px !important;
      }

      &.yes {
        border-right: solid 1px #fff;
        border-radius: 6px 0px 0px 6px !important;
      }
    }
  }
`;
