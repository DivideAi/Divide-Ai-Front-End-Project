import { GroupList } from '../../components/Grouplist';
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { NextButton } from './Button';
import { SharedBillMain } from './styles';

export const SharedBill = () => {
  return (
    <>
      <Navbar logout />
      <SharedBillMain>
        <Header description='Prontinho, abaixo está o valor total da conta e também o valor de cada pessoa'/>
        <GroupList />
        <NextButton to={'/counterpage'}>Nova divisão</NextButton>
      </SharedBillMain>
    </>
  );
};
