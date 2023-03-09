import { StyledLoginForm } from "./styles";
import { GeneralInput } from "../../GeneralInput";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


interface iLoginForm{
    email: string;
    password: string;
}

export const LoginForm = () => {

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
        <StyledLoginForm onSubmit={handleSubmit(/* chamar aqui a log user */)}>
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
        </StyledLoginForm>
    )
}