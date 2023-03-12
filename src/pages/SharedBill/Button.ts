import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NextButton = styled(Link)`
  & {
    background: var(--grey-0);
    border: 1px solid var(--grey-0);
    border-radius: 10px;
    color: var(--primary-50);

    font-weight: 700;
    font-size: calc(18rem / 16);
    text-align: center;

    padding: 16px 0;
    max-width: 100%;
    width: 320px;
  }
`;
