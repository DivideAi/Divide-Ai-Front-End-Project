import { useContext } from 'react';
import { ContextUser } from '../../providers/ContextUser';
import { GroupCard } from './GroupCard';
import { StyledGroupList } from './styles';

export const GroupList = () => {
  const { amountBill, tableConsumers } = useContext(ContextUser);

  return (
    <StyledGroupList>
      <GroupCard all amount={amountBill} client='banana' />
      <GroupCard client='banana' amount={20} />
      {tableConsumers ? (
        <GroupCard key={crypto.randomUUID()} client='paçoca' amount={10} />
      ) : null}
    </StyledGroupList>
  );
};
