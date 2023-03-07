import { GroupCard } from "./GroupCard";
import { StyledGroupList } from "./styles";

export const GroupList = () => {
  return (
    <StyledGroupList>
      <GroupCard example="banana" />
      <GroupCard example="banana" />
      <GroupCard example="banana" />
      <GroupCard example="banana" />
    </StyledGroupList>
  );
};
