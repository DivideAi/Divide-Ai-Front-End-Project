import { StyledForm } from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext, useState } from 'react';
import { ContextUser } from '../../providers/ContextUser';
// import AllPeople from '../../assets/allpeople.png';
import { useNavigate } from 'react-router-dom';
import { UserSelect } from './UserSelect';
import { callToast } from '../../scripts/Toast';

export interface iProducts {
  name: string;
  price: number;
  consumers: string[];
}

export const FormProducts = () => {
  const navigate = useNavigate();

  const { products, setProducts, clients, tableConsumers, splitBill } =
    useContext(ContextUser);

  const [consumers, setConsumers] = useState([] as string[]);

  const formSchema = yup.object().shape({
    name: yup.string().required('Preencha qual produto foi consumido'),
    price: yup.string().required('Preencha o valor do produto consumido'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iProducts>({
    resolver: yupResolver(formSchema),
  });

  const addProducts = (data: iProducts) => {
    const newData = { ...data, consumers: consumers };
    setProducts([...products, newData]);
    setConsumers([]);
    callToast('Produto adicionado com sucesso', false)

    reset();
  };

  const addClient = (element: string) => {
    const findUser = consumers.includes(element);
    if (!findUser) {
      setConsumers([...consumers, element]);
    }
  };

  const addAll = () => {
    const findUsers = clients.every((element: string) =>
      consumers.includes(element)
    );
    if (!findUsers) {
      setConsumers([...clients]);
    }
  };

  const calc = () => {
    splitBill();
    navigate('/waiter');
  };

  return (
    <StyledForm onSubmit={handleSubmit(addProducts)}>
      <div className='inputs'>
        <input type='text' placeholder='Ex: Cerveja' {...register('name')} />
        {errors ? (
          <span className='Body-small'>{errors.name?.message}</span>
        ) : null}
        <input
          type='number'
          placeholder='Ex: R$ 80,00'
          {...register('price')}
        />
        {errors ? (
          <span className='Body-small'>{errors.price?.message}</span>
        ) : null}
      </div>
      <ul>
        <UserSelect all allFunction={addAll} allConsumers={consumers}/>
        {tableConsumers.map((element) => {
          console.log(tableConsumers)
          return (
            <UserSelect  allFunction={addAll} userFunction={addClient} consumer={element} key={crypto.randomUUID()} allConsumers={consumers}/>
          );
        })}
      </ul>
      <div className='buttons'>
        <button type='submit'>Adicionar Item</button>
        <button onClick={calc} type='button'>
          Calcular
        </button>
      </div>
    </StyledForm>
  );
};
