import { SharedBillMain } from "./styles";
import { Header } from "../../components/Header";
import { GroupList } from "../../components/Grouplist";
import { NextButton } from "./Button";

export const SharedBill = () => {
  return (
    <SharedBillMain>
      <Header />
      <GroupList />
      <NextButton to={"/"}>Nova divisão</NextButton>
    </SharedBillMain>
  );
};
