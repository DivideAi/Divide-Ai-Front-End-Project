import { StyledGroupCard } from "./styles";
import { iGroupCardInfo } from "./types";
import icon from "../../../assets/Group/all.svg";

export const GroupCard = ({ example }: iGroupCardInfo) => {
  return (
    <StyledGroupCard>
      <div className="person-info">
        <img className="person-info__icon" src={icon} alt="icon teste" />
        <p className="person-info__name">base base</p>
      </div>
      <div className="value-place">
        <p className="value">R$ 000,00</p>
      </div>
    </StyledGroupCard>
  );
};
