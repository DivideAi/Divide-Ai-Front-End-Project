import { Header } from '../../components/Header'
import Left from '../../assets/left.png'
import Right from '../../assets/rigth.png'
import { ContextUser } from '../../providers/ContextUser'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { StyledDiv } from './styles'

export const CounterPage = () =>{
    const navigate = useNavigate();
    const { setUser } = useContext(ContextUser);
    const [counter, setCounter] = useState(0); 

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
        if(counter > 0){
            setCounter(counter - 1)
        }
    }

    return(
        <StyledDiv>
            <Header/>
            <div className='container-counter'>
                <p>Para começar, eu preciso saber o número de pessoas da mesa:</p>
                <div className='counter'>
                    <img src={Left} alt="Left" onClick={()=> subPeople()}/>
                    <h1>{counter}</h1>
                    <img src={Right} alt="Right" onClick={()=> addPeople()}/>
                </div>
                <p>*Limite máximo de 20 pessoas</p>
                <button onClick={()=> counterPeople()}>Continuar</button>
           </div>
        </StyledDiv>
    )
}