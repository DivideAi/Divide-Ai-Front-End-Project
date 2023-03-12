import { useContext } from 'react';
import iconAll from '../../assets/Group/all.svg';

import { ContextUser } from '../../providers/ContextUser';
import { GroupCard } from './GroupCard';
import { StyledGroupList } from './styles';

export const GroupList = () => {
  const { amountBill, tableConsumers } = useContext(ContextUser);

  return (
    <StyledGroupList>
      <GroupCard all amount={amountBill} avatar={iconAll} />
      {tableConsumers
        ? tableConsumers.map((tableConsumer) => (
            <GroupCard
              key={crypto.randomUUID()}
              amount={tableConsumer.billPart}
              avatar={tableConsumer.avatar}
              name={tableConsumer.name}
            />
          ))
        : null}
    </StyledGroupList>
  );
};
