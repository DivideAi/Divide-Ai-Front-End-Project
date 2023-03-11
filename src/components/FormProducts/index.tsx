import { StyledForm } from './styles'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext, useEffect } from 'react';
import { ContextUser } from '../../providers/ContextUser';
import AllPeople from '../../assets/allpeople.png'

export interface iProducts {
    name: string;
    price: number;
}

export const FormProducts = () =>{

    const { products, setProducts, client, avatar, consumer, setConsumer } = useContext(ContextUser)

    useEffect(() => {
        console.log(products)
    }, [products])

    const formSchema = yup.object().shape({
        name: yup.string().required('Preencha qual produto foi consumido'),
        price: yup.number().required('Preencha o valor do produto consumido'),
    });

    const {
        register,
        handleSubmit, 
        reset,   
    } = useForm<iProducts>({
        resolver: yupResolver(formSchema),
    });

    const addProducts = (data: iProducts) =>{
        const newData = {...data, consumer: consumer}
        setProducts([...products, newData])
        setConsumer([])

        reset()
    }
    const addClient = (element: string) =>{
        const findUser = consumer.includes(element)
        if(!findUser){
            setConsumer([...consumer, element])
        }
    }

    const addAll = () =>{
        const findUsers = client.every((element: string)=> consumer.includes(element))
        if(!findUsers){
            setConsumer([...client])
        }
    }

    return(
        <StyledForm onSubmit={handleSubmit(addProducts)}>
            <div className='inputs'>
                <input type="text" placeholder="Ex: Cerveja" {...register('name')}/>
                <input type="text" placeholder="Ex: R$ 80,00" {...register('price')}/>
            </div>
            <ul>
                <li onClick={addAll}>
                    <img src={AllPeople} alt="Avatar1" />
                    <p>Todos</p>
                </li>
                {client.map((element: string, index: number) => {
                    return(
                    <li key={element} onClick={()=> addClient(element)}>
                        <img src={avatar[index]} alt="AvatarClient" />
                        <p>{element}</p>
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


