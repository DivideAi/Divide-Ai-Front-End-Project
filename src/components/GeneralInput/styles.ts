import styled from 'styled-components';

export const StyledInput = styled.input`
  border: 1px solid var(--grey-0);
  border-radius: 10px;
  padding: 1rem 2rem;
  color: var(--grey-0);
  text-align: start;

  ::placeholder {
    text-align: start;
    color: var(--grey-0);
  }

  :focus {
    outline: 1px solid var(--grey-0);
  }
`;
