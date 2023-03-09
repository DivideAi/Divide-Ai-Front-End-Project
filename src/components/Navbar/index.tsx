import { StyledNavbar } from "./styles";
import logo from "../../assets/Logo Header.png";
import logoutIcon from "../../assets/logout-icon.png";

interface iNavbarProps {
  logout: boolean;
  buttonText?: string;
}

export const Navbar = ({ buttonText, logout }: iNavbarProps) => {
  return (
    <StyledNavbar>
      <img className="logo-image" src={logo} alt="Logo Divide  Aí" />

      <button className={`nav-button${logout ? " logout" : ""}`}>
        {logout ? <img src={logoutIcon} alt="Logout Button" /> : buttonText}
      </button>
    </StyledNavbar>
  );
};
