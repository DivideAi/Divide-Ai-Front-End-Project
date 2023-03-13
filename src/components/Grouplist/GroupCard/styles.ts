import styled from 'styled-components';

export const StyledGroupCard = styled.li`
  & {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    gap: 20px;
  }

  & > div.person-info {
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    gap: 5px;

    text-align: center;

    width: 100px;

    img.person-info__icon {
      height: 52px;
      width: 52px;
    }
  }

  & > div.value-place {
    align-self: flex-start;
    background: var(--grey-0) !important;
    border: solid 1px var(--primary-50);
    border-radius: 12px;

    text-align: center;

    margin-top: 12px;
    padding: 16px 0;

    max-width: 100%;
    width: 180px;

    p.value {
      background: none;
      color: var(--primary-50) !important;
    }
  }
`;
