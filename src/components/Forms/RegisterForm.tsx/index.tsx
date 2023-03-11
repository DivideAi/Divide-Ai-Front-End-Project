import { useContext } from 'react';
import { StyledRegisterForm } from "./styles"
import { GeneralInput } from "../../GeneralInput"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { ContextUser } from '../../../providers/ContextUser'

export interface iRegisterForm {
    name: string;
    email: string;
    password: string;
    rewritten_password: string;
}

export const RegisterForm = () => {
    const { registerUser } = useContext(ContextUser);

    const registerSchema = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        email: yup.string().required('Email obrigatório'),
        password: yup.string().required('Senha obrigatória'),
        rewritten_password: yup
          .string()
          .oneOf([yup.ref('password')], 'Precisa ser igual a senha')
          .required('Confirmação de senha obrigatória'),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iRegisterForm>({
        resolver: yupResolver(registerSchema),
    })

    return(
        <StyledRegisterForm onSubmit={handleSubmit(registerUser)}>
            <GeneralInput 
            placeholder="Nome" 
            register={register("name")} 
            type={"text"} 
            error={errors.name}
            />
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
            <GeneralInput 
            placeholder="Confirme a senha" 
            register={register("rewritten_password")} 
            type={"password"} 
            error={errors.rewritten_password}
            />
            <Link to='/login' className='link_style'>Já possui uma conta?</Link>
            <button>Cadastrar</button>
        </StyledRegisterForm>
    )
}