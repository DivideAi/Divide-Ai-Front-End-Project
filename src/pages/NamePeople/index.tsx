import { Header } from '../../components/Header';
import Avatar1   from '../../assets/avatar1.png';
import { StyledDiv } from './styles'
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ContextUser } from '../../providers/ContextUser';

export interface iNamePeople {
    name: string;
}


export const NamePeople = () =>{
    
    const { user } = useContext(ContextUser)

    const formSchema = yup.object().shape({
        name: yup.string().required('Preencha o nome')
    });

    const {
        register,
        // handleSubmit,    
    } = useForm<iNamePeople>({resolver: yupResolver(formSchema)});

    const namePeople = (event: any) => {
        event.preventDefault()
       console.log(event.target.elements)

    }
    
    return(
        <StyledDiv>
           <Header/>
           <div>
                <p>Agora preciso dos nomes de cada uma dessas pessoas</p>
           </div>
           <form onSubmit={namePeople}>
           <ul>
            {user.map((element => {
                return(
                    <li key={element}>
                    <img src={Avatar1} alt="avatarPerfil" />
                    <input type="text" placeholder="Nome"
                     {...register('name')} />
                </li>
                    )
                }))}
           </ul>
           <button type='submit'>Continuar</button>
            </form>
        </StyledDiv>
    )
}