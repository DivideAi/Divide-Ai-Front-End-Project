import { Header } from "../../components/Header";
import { LoginForm } from "../../components/Forms/LoginForm"


export const Login = () =>{
    return(
        <>
            <Header/>
            <h1>Login</h1>
            <p>
                Agora é só preencher os dados e dividir sua conta!
            </p>
            <LoginForm/>
        </>
    )
}