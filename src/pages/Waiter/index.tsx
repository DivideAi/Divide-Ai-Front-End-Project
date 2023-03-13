import { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import waiter from '../../assets/waiter.svg'
import { Header } from '../../components/Header'
import { Navbar } from '../../components/Navbar'
import { ContextUser } from '../../providers/ContextUser'
import { NextButton, PreviousButton } from './buttons'
import { StyledMain } from './styles'
import { isLogged } from '../../scripts/localStorage'

export const Waiter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged()) {
      navigate(-1)
    }
  }, [])

  const { clearConsumedProducts, incrementServiceFee } =
    useContext(ContextUser);

  const back = () => {
    clearConsumedProducts();
    navigate(-1);
  };

  const payFee = () => {
    incrementServiceFee();
    navigate('/sharedbill');
  };

  return (
    <>
      <Navbar logout />
      <StyledMain>
        <Header description='Estamos quase lá, ultimo passo é saber se vocês irão pagar os 10% do garçom' />

        <img className='Waiter' src={waiter} alt='Waiter Icon' />

        <div className='option-button'>
          <button onClick={payFee} className='yes'>
            SIM
          </button>

          <button
            className='no'
            onClick={() => {
              navigate('/sharedbill');
            }}
          >
            NÃO
          </button>
        </div>

        <div className='page-buttons'>
          <PreviousButton className='Link' onClick={back}>
            Anterior
          </PreviousButton>

          <NextButton className='Link' to={'/sharedbill'}>
            Continuar
          </NextButton>
        </div>
      </StyledMain>
    </>
  );
};
