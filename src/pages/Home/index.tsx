/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logoFull from '../../assets/logoDivideAi.png'
import { Link } from 'react-router-dom'
import { isLogged } from '../../scripts/localStorage'
import { StyledHomePage } from './styles'

export const Home = () =>{
    const navigation = useNavigate()

    useEffect(() => {
        if (isLogged()) {
         navigation(-1);
        }
    }, [])

    return(
        <StyledHomePage>
            <img src={logoFull} alt='LogoDivideAi'/>
            <p>Vamos dividir a conta do bar de maneira fácil e justa?</p>
            <Link to='/register' className='Link_style'>Cadastro</Link>
            <Link to='/login' className='Link_style'>Login</Link>
        </StyledHomePage>
    )
}
