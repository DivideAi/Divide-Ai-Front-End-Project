import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  & {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  & > div.navbar-content {
    border-bottom: solid 1px var(--primary-50);

    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 40px 60px !important;
    width: 100%;
  }

  div.navbar-content > img.logo-image {
    display: none;
  }

  div.navbar-content > button.nav-button {
    &.logout {
      all: unset;
      border-radius: 10px;
      border: solid 2px var(--primary);
      cursor: pointer;
      display: flex;

      height: 32px;
      padding: 8px;
      width: 32px;

      img {
        height: 32px;
        width: 32px;
      }

      :hover,
      :focus {
        border-color: var(--grey-0);
      }
    }
  }

  @media screen and (min-width: 600px) {
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);

    & > div.navbar-content {
      border: none;
      justify-content: space-between;

      padding: 40px 0 !important;
      width: 60%;
    }

    div.navbar-content > img.logo-image {
      display: flex;
    }
  }
`;
