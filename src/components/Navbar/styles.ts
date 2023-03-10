import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 35px !important;

  & > img.logo-image {
    display: none;
  }

  & > button.nav-button {
    &.logout {
      all: unset;

      img:hover {
        background: red;
      }
    }
  }

  @media screen and (min-width: 600px) {
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);
    justify-content: space-between;

    & > img.logo-image {
      display: flex;
    }
  }
`;
