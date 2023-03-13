import { useEffect } from 'react';
import { GroupList } from '../../components/Grouplist';
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { NextButton } from './Button';
import { SharedBillMain } from './styles';
import { useNavigate } from 'react-router-dom';
import { isLogged } from '../../scripts/localStorage';

export const SharedBill = () => {
  const navigation = useNavigate()

  useEffect(() => {
    if (!isLogged()) {
      navigation(-1);
    }
  }, [])

  return (
    <>
      <Navbar logout />
      <SharedBillMain>
        <Header />
        <GroupList />
        <NextButton to={'/'}>Nova divisão</NextButton>
      </SharedBillMain>
    </>
  );
};
