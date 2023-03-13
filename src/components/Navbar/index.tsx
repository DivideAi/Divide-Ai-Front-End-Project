import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo Header.png';
import logoutIcon from '../../assets/logout-icon.svg';
import { removeToken } from '../../scripts/localStorage';
import { StyledNavbar } from './styles';

interface iNavbarProps {
  logout: boolean;
  buttonText?: string;
}
//
export const Navbar = ({ buttonText, logout }: iNavbarProps) => {
  const navigate = useNavigate();

  const logoff = () => {
    removeToken();
    navigate('/');
  };

  return (
    <StyledNavbar>
      <div className='navbar-content'>
        <img className='logo-image' src={logo} alt='Logo Divide  Aí' />

        <button
          className={`nav-button${logout ? ' logout' : ''}`}
          onClick={logoff}
        >
          {logout ? <img src={logoutIcon} alt='Logout Button' /> : buttonText}
        </button>
      </div>
    </StyledNavbar>
  );
};
