import { StyledForm } from './styles'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext } from 'react';
import { ContextUser } from '../../providers/ContextUser';
import AllPeople from '../../assets/allpeople.png'

export interface iProducts {
    name: string;
    price: number;
}

export const FormProducts = () =>{

    const { products, setProducts, client } = useContext(ContextUser)

    const formSchema = yup.object().shape({
        name: yup.string().required('Preencha qual produto foi consumido'),
        price: yup.number().required('Preencha o valor do produto consumido'),
    });

    const {
        register,
        handleSubmit, 
        reset,   
    } = useForm<iProducts>({resolver: yupResolver(formSchema)});

    const addProducts = (data: iProducts) =>{
        setProducts([...products, data])
        console.log(products)
        reset()
    }

    return(
        <StyledForm onSubmit={handleSubmit(addProducts)}>
            <div className='inputs'>
                <input type="text" placeholder="Ex: Cerveja" {...register('name')}/>
                <input type="text" placeholder="Ex: R$ 80,00" {...register('price')}/>
            </div>
            <ul>
                <li>
                    <img src={AllPeople} alt="Avatar1" />
                    <p>Todos</p>
                </li>
                {client.map((element: string, index: number) => {
                    return(
                    <li key={element}>
                        <img src={AllPeople} alt="Avatar1" />
                        <p>{element[index]}</p>
                    </li>
                    )
                })}
                
            </ul>
            <div className='buttons'>
            <button type='submit'>Adicionar Item</button>
            <button>Calcular</button>
            </div>
        </StyledForm>
    )
}