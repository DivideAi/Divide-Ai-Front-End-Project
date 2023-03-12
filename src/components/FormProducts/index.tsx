import { StyledForm } from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext, useState } from 'react';
import { ContextUser } from '../../providers/ContextUser';
import AllPeople from '../../assets/allpeople.png';
import { useNavigate } from 'react-router-dom';

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
        <li onClick={addAll}>
          <img src={AllPeople} alt='Avatar1' />
          <p>Todos</p>
        </li>
        {tableConsumers.map((element) => {
          console.log(tableConsumers);
          return (
            <li key={element.name} onClick={() => addClient(element.name)}>
              <img src={element.avatar} alt='AvatarClient' />
              <p>{element.name}</p>
            </li>
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
