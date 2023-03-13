import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NextButton = styled(Link)`
  & {
    background: var(--grey-0);
    border: 1px solid var(--grey-0);
    border-radius: 10px;
    color: var(--primary-50);
    text-align: center;
    max-width: 100%;
    width: 320px;
    
  }
`;
