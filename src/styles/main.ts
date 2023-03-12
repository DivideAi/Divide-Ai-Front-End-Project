import styled from 'styled-components';

interface iMainProps {
  BorderColor?: string;
}

export const Main = styled.main<iMainProps>`
  & {
    @media screen and (min-width: 640px) {
      border: 2px solid
        ${(props) => (props ? props.BorderColor : 'var(--primary-50)')};
      border-radius: 10px;
      padding: 60px;
      width: 60%;
      margin: 4rem auto;
    }
  }
`;
