import waiter from "../../assets/waiter.svg";
import { Header } from "../../components/Header";
import { NextButton } from "./button";
import { StyledMain } from "./styles";

export const Waiter = () => {
  return (
    <StyledMain>
      <Header />

      <img className="Waiter" src={waiter} alt="Waiter Icon" />

      <div className="option-button">
        <button className="yes">SIM</button>

        <button className="no">NÃO</button>
      </div>
      <NextButton to={"/sharedbill"}>Continuar</NextButton>
    </StyledMain>
  );
};
