import styled from 'styled-components';
import { Main } from '../../styles/main';

export const StyledMain = styled(Main)`
  & {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
  }

  div.option-button {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    flex-flow: row nowrap;
    border: solid 2px var(--grey-0);
    border-radius: 8px;
    font-weight: 600;
    font-size: calc(36rem / 16);

    max-width: 100%;

    button {
      all: unset;
      background: var(--primary-50);
      cursor: pointer;
      color: var(--grey-0);
      word-wrap: break-all;

      text-align: center;

      padding: 16px;
      &:hover {
        background: var(--primary);
      }

      &.no {
        border-left: solid 1px var(--grey-0);
        border-radius: 0px 6px 6px 0px !important;
      }

      &.yes {
        border-right: solid 1px var(--grey-0);
        border-radius: 6px 0px 0px 6px !important;
      }
      @media(min-width: 640px){
        max-width: 320px;
    }
    }
  }

  div.page-buttons {
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;

    max-width: 100%;
  }
`;
