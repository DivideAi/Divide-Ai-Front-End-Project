import { Header } from '../../components/Header'
import { RegisterForm } from '../../components/Forms/RegisterForm.tsx'

export const Register = () =>{
    return(
        <div>
            <Header/>
            <h1>Cadastro</h1>
            <p>Vamos lá? Preencha todos os campos abaixo. É bem rapidinho, prometo!</p>
            <RegisterForm/>
        </div>
    )
}