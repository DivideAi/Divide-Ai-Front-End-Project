/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from '../../components/Header'
import Left from '../../assets/left.png'
import Right from '../../assets/rigth.png'
import { ContextUser } from '../../providers/ContextUser'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { StyledMain } from './styles'
import { Navbar } from '../../components/Navbar'
import { isLogged } from '../../scripts/localStorage'

export const CounterPage = () =>{
    const navigate = useNavigate();
    const { setUser, clearProducts } = useContext(ContextUser);
    const [counter, setCounter] = useState(2); 

    useEffect(() => {
      if (!isLogged()) {
          navigate(-1);
      }
      clearProducts()
  }, [])

    const counterPeople = () =>{
        const arrayUser = []
        for (let i = 1; i <= counter; i ++){
          arrayUser.push(i)
        }
        setUser(arrayUser)
        navigate('/namepeople')
    }

    const addPeople = () =>{
        if(counter < 20){
            setCounter(counter + 1)
        }
    }
    const subPeople = () =>{
        if(counter > 2){
            setCounter(counter - 1)
        }
    }


    return(
      <>
        <Navbar logout/>
        <StyledMain>
            <Header description='Para começar, eu preciso saber o número de pessoas da mesa:'/>
            <div className='container-counter'>
                <div className='counter'>
                    <img src={Left} alt="Left" onClick={()=> subPeople()}/>
                    <h1>{counter}</h1>
                    <img src={Right} alt="Right" onClick={()=> addPeople()}/>
                </div>
                <p>*Limite máximo de 20 pessoas</p>
                <button onClick={()=> counterPeople()}>Continuar</button>
           </div>
        </StyledMain>
        </>
    )
}
