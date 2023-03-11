/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react';
import { iProducts } from '../components/FormProducts';
import Avatar1 from '../assets/avatar1.png';
import Avatar2 from '../assets/avatar2.png';
import Avatar3 from '../assets/avatar3.png';
import Avatar4 from '../assets/avatar4.png';
import Avatar5 from '../assets/avatar5.svg';
import Avatar6 from '../assets/avatar6.svg';
import Avatar7 from '../assets/avatar7.svg';
import Avatar8 from '../assets/avatar8.png';
import { iLoginForm } from '../components/Forms/LoginForm';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../scripts/localStorage';
import { callToast } from '../scripts/Toast';
import { iRegisterForm } from '../components/Forms/RegisterForm.tsx';

interface iUserProviderChildren {
  amountBill: number;
  avatar: string[];
  client: any;
  consumer: string[];
  logUser: (data: iLoginForm) => Promise<void>;
  products: iProducts[];
  registerUser: (data: iRegisterForm) => Promise<void>;
  setClient: React.Dispatch<React.SetStateAction<any>>;
  setConsumer: React.Dispatch<React.SetStateAction<string[]>>;
  setProducts: React.Dispatch<React.SetStateAction<iProducts[]>>;
  setUser: React.Dispatch<React.SetStateAction<number[]>>;
  tableConsumers: iTableConsumers[];
  user: number[];
}

interface iUserChildren {
  children: React.ReactNode;
}

interface iTableConsumers {
  avatar: string;
  billPart: number;
  name: string;
  consumedProducts: iProducts[];
}

export const ContextUser = createContext({} as iUserProviderChildren);

export const UserProvider = ({ children }: iUserChildren) => {
  const [user, setUser] = useState([] as number[]);
  const [products, setProducts] = useState([] as iProducts[]);
  const [client, setClient] = useState([] as any);
  const [avatar, setAvatar] = useState([
    Avatar1,
    Avatar2,
    Avatar3,
    Avatar4,
    Avatar5,
    Avatar6,
    Avatar7,
    Avatar8,
    Avatar1,
    Avatar2,
    Avatar3,
    Avatar4,
    Avatar5,
    Avatar6,
    Avatar7,
    Avatar8,
    Avatar1,
    Avatar2,
    Avatar3,
    Avatar4,
  ] as string[]);
  const [consumer, setConsumer] = useState([] as string[]);

  const [amountBill, setAmountBill] = useState(0);
  const [tableConsumers, setTableConsumers] = useState([] as iTableConsumers[]);

  useEffect(() => {
    setNewTableConsumers();
  }, [client]);

  useEffect(() => {
    if (products.length) {
      const newAmountBill = products.reduce(
        (acc, product) => acc + product.price,
        0
      );

      setAmountBill(newAmountBill);
    }
  }, [products]);

  const navigation = useNavigate();

  const logUser = async (data: iLoginForm) => {
    try {
      const answer = await api.post('/login', data);
      setToken(answer.data.accessToken);
      callToast('Login realizado com sucesso', false);
      setTimeout(() => {
        navigation('/counterpage');
      }, 4000);
    } catch (error) {
      callToast('Credenciais inválidas', true);
    }
  };

  const registerUser = async (data: iRegisterForm) => {
    const requestParams = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    try {
      const answer = await api.post('/register', requestParams);
      setToken(answer.data.accessToken);
      callToast('Registro realizado com sucesso', false);
      setTimeout(() => {
        navigation('/counterpage');
      }, 4000);
    } catch (error) {
      callToast('Credenciais inválidas', true);
    }
  };

  const setNewTableConsumers = () => {
    const currentClients: string[] = [...client];

    const newTableConsumers: iTableConsumers[] = currentClients.map(
      (currentClient, index) => ({
        avatar: avatar[index],
        billPart: 0,
        consumedProducts: [],
        name: currentClient,
      })
    );

    setTableConsumers(newTableConsumers);
  };

  // const updateConsumedProducts = (
  //   billPart: number,
  //   consumedProduct: iProducts,
  //   consumer: string
  // ) => {
  //   const updatedConsumers = tableConsumers.map((tableConsumer) => {
  //     if (tableConsumer.name === consumer) {
  //       tableConsumer.billPart = tableConsumer.billPart + billPart;

  //       tableConsumer.consumedProducts = [
  //         ...tableConsumer.consumedProducts,
  //         consumedProduct,
  //       ];

  //       return tableConsumer;
  //     }
  //     return tableConsumer;
  //   });

  //   setTableConsumers(updatedConsumers);
  // };

  // const splitBill = () => {
  //   products.forEach((product) => {
  //     const currentValue = product.price / product.consumer.length;

  //     product.consumer.forEach((consumer) =>
  //       updateConsumedProducts(currentValue, product, consumer)
  //     );
  //   });
  // };

  return (
    <ContextUser.Provider
      value={{
        amountBill,
        avatar,
        client,
        consumer,
        logUser,
        products,
        registerUser,
        setClient,
        setConsumer,
        setProducts,
        setUser,
        tableConsumers,
        user,
      }}>
      {children}
    </ContextUser.Provider>
  );
};
