import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const DefautButton = css`
  & {
    background: var(--grey-0);
    border-radius: 8px;
    border: solid 2px var(--grey-0);

    color: var(--primary-50) !important;
    padding-bottom: 16px;
    padding-top: 16px;

    width: 320px;
    max-width: 100%;

    &:hover {
      border-color: var(--primary-50);
    }
  }
`;

export const NextButton = styled(Link)`
  ${DefautButton}
`;

export const PreviousButton = styled.button`
  ${DefautButton}
`;
