import { useContext } from "react";
import { ContextUser } from "../../providers/ContextUser";
import { GroupCard } from "./GroupCard";
import { StyledGroupList } from "./styles";

export const GroupList = () => {
  const { client } = useContext(ContextUser);
  return (
    <StyledGroupList>
      <GroupCard example="banana" />
      <GroupCard example="banana" />
      {client ? <GroupCard key={crypto.randomUUID()} example="paçoca" /> : null}
    </StyledGroupList>
  );
};
