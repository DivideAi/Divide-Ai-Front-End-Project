/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { isLogged } from '../../scripts/localStorage'
import { StyledHomePage } from './styles'
import { Header } from '../../components/Header'

export const Home = () =>{
    const navigation = useNavigate()

    useEffect(() => {
        if (isLogged()) {
         navigation(-1);
        }
    }, [])

    return(
        <StyledHomePage>
            <Header home description='Vamos dividir a conta do bar de maneira fácil e justa?'/>
            <Link to='/register' className='Link_style'>Cadastro</Link>
            <Link to='/login' className='Link_style'>Login</Link>
        </StyledHomePage>
    )
}
