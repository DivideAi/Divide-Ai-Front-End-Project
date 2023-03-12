import { StyledGroupCard } from './styles';
import { iGroupCardInfo } from './types';

export const GroupCard = ({ all, amount, avatar, name }: iGroupCardInfo) => (
  <StyledGroupCard>
    <div className='person-info'>
      <img className='person-info__icon' src={avatar} alt='icon teste' />
      <p className='person-info__name'>{all ? 'Todos' : name}</p>
    </div>
    <div className='value-place'>
      <p className='value'>
        {amount?.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </p>
    </div>
  </StyledGroupCard>
);
