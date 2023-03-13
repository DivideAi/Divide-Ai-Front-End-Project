import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;

  .inputs {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    border: 1px solid var(--grey-0);
    border-radius: 10px;
    padding: 1rem 5rem;
    color: var(--grey-0);
    text-align: start;

    ::placeholder {
      text-align: start;
      color: var(--grey-0);
    }

    :focus {
      outline: 1px solid var(--grey-0);
    }
  }

  & input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  & input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
