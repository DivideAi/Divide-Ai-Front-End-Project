import styled from 'styled-components';

export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 37px;
  margin: 50px auto;

  .link_style {
    font-size: 1rem;
    font-weight: 600;
    color: var(--grey-0);
    margin: 0 auto;
  }

  button{
    width: 100%;
    max-width: 320px;
  }
`;
