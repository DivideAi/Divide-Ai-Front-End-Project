import { useEffect } from 'react'
import { Header } from '../../components/Header'
import { RegisterForm } from '../../components/Forms/RegisterForm.tsx'
import { useNavigate } from 'react-router-dom'
import { isLogged } from '../../scripts/localStorage'
import { StyledRegisterPage } from './styles'

export const Register = () =>{
    const navigation = useNavigate()

    useEffect(() => {
        if (isLogged()) {
         navigation(-1);
        }
    }, [])
    
    return(
        <StyledRegisterPage>
            <Header title='Cadastro' description='Vamos lá? Preencha todos os campos abaixo. É bem rapidinho, prometo!'/>
            <RegisterForm/>
        </StyledRegisterPage>
    )
}
