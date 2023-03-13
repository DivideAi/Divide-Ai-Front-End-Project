import styled from "styled-components";

interface iUserSelectStyledProps {
  selected: boolean;
}

export const UserSelectStyled = styled.li <iUserSelectStyledProps>`
      border: solid 2px;
      border-color: ${({selected}) => selected? 'var(--grey-0)' :  'var(--primary)'};
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 0.5rem;

      padding: 10px;
      width: 30%;
      cursor: pointer;
      
      img {
        width: 50px;
        height: 50px;
      }

`
