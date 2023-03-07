import styled from "styled-components";

export const StyledGroupCard = styled.li`
  & {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    gap: 20px;
  }

  & > div.person-info {
    display: flex;
    flex-flow: column nowrap;
    gap: 5px;

    img.person-info__icon {
      height: 52px;
      width: 52px;
    }
  }

  & > div.value-place {
    align-self: flex-start;
    background: #fff !important;
    border: solid 1px #3295ad;
    border-radius: 12px;

    text-align: center;

    margin-top: 12px;
    padding: 16px 0;

    max-width: 100%;
    width: 180px;

    p.value {
      background: none;
      color: #3295ad !important;
    }
  }
`;
