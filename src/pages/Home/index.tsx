import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logoFull from '../../assets/logoDivideAi.png'
import { Link } from 'react-router-dom'
import { isLogged } from '../../scripts/localStorage'

export const Home = () =>{
    const navigation = useNavigate()

    useEffect(() => {
        if (isLogged()) {
         navigation(-1);
        }
    }, [])

    return(
        <div>
            <img src={logoFull} alt='LogoDivideAi'/>
            <p>Vamos dividir a conta do bar de maneira fácil e justa?</p>
            <Link to='/register'>Cadastro</Link>
            <Link to='/login'>Login</Link>
        </div>
    )
}