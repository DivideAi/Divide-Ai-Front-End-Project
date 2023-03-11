import { useContext } from 'react';
import { StyledLoginForm } from "./styles";
import { GeneralInput } from "../../GeneralInput";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ContextUser } from "../../../providers/ContextUser"
import { Link } from 'react-router-dom'


export interface iLoginForm{
    email: string;
    password: string;
}

export const LoginForm = () => {
    const { logUser } = useContext(ContextUser);

    const loginSchema = yup.object().shape({
        email: yup.string().required('E-mail obrigatório!').email('E-mail inválido!'),
        password: yup.string().required('Senha obrigatória'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iLoginForm>({
        resolver: yupResolver(loginSchema),
    });

    return(
        <StyledLoginForm onSubmit={handleSubmit(logUser)}>
            <GeneralInput 
            placeholder="Email" 
            register={register("email")} 
            type={"email"} 
            error={errors.email}
            />
            <GeneralInput 
            placeholder="Senha" 
            register={register("password")} 
            type={"password"} 
            error={errors.password}
            />
            <Link to='/register'>Vamos nos cadastrar?</Link>
            <button type='submit'>Entrar</button>
        </StyledLoginForm>
    )
}