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

    li {
      border: solid 2px var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 0.5rem;

      padding: 10px;
      width: 30%;
      cursor: pointer;
      :hover {
        border-color: var(--grey-0);
      }

      img {
        width: 50px;
        height: 50px;
      }
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
