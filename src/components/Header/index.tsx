import LogoDivideAi from '../../assets/Logo Header.png'
import { StyledHeader } from './styles'
import LogoFull from '../../assets/logoDivideAi.svg'

interface iHeaderProps {
  home?: boolean;
  description?: string;
  title?: string;
}
export const Header = (props: iHeaderProps) => {
  return (
    <StyledHeader>
      <img className='logo-image' src={props.home? LogoFull : LogoDivideAi} alt='LogoDivideAi' />
      {props.title ? (
        <h1 className='header-title Title1'>{props.title}</h1>
      ) : null}
      <p className='header-description Body-600'>{props.description}</p>
    </StyledHeader>
  );
};
