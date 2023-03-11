import iconAll from '../../../assets/Group/all.svg';
import { StyledGroupCard } from './styles';
import { iGroupCardInfo } from './types';

export const GroupCard = ({ all, amount, client }: iGroupCardInfo) => (
  <StyledGroupCard>
    <div className='person-info'>
      <img className='person-info__icon' src={iconAll} alt='icon teste' />
      <p className='person-info__name'>{all ? 'Todos' : 'não todos'}</p>
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
