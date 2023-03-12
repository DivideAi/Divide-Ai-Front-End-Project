/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react';
import { iProducts } from '../components/FormProducts';
import Avatar1 from '../assets/avatar1.svg';
import Avatar2 from '../assets/avatar2.svg';
import Avatar3 from '../assets/avatar3.svg';
import Avatar4 from '../assets/avatar4.svg';
import Avatar5 from '../assets/avatar5.svg';
import Avatar6 from '../assets/avatar6.svg';
import Avatar7 from '../assets/avatar7.svg';
import Avatar8 from '../assets/avatar8.svg';
import { iLoginForm } from '../components/Forms/LoginForm';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../scripts/localStorage';
import { callToast } from '../scripts/Toast';
import { iRegisterForm } from '../components/Forms/RegisterForm.tsx';

interface iUserProviderChildren {
  amountBill: number;
  arrayAvatar: string[];
  clients: string[];
  logUser: (data: iLoginForm) => Promise<void>;
  products: iProducts[];
  registerUser: (data: iRegisterForm) => Promise<void>;
  setClients: React.Dispatch<React.SetStateAction<string[]>>
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
  const [clients, setClients] = useState([] as string[]);
  const arrayAvatar = [
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
  ];

  const [amountBill, setAmountBill] = useState(0);
  const [tableConsumers, setTableConsumers] = useState([] as iTableConsumers[]);

  useEffect(() => {
    setNewTableConsumers();
  }, [clients]);

  useEffect(() => {
    if (products.length) {
      const newAmountBill = products.reduce(
        (acc, product) => acc + product.price,
        0
      );

      setAmountBill(newAmountBill);
      splitBill();
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
    const currentClients: string[] = [...clients];

    const newTableConsumers: iTableConsumers[] = currentClients.map(
      (currentClient, index) => ({
        avatar: arrayAvatar[index],
        billPart: 0,
        consumedProducts: [],
        name: currentClient,
      })
    );

    setTableConsumers(newTableConsumers);
  };

  const updateConsumedProducts = (
    billPart: number,
    consumedProduct: iProducts,
    consumer: string
  ) => {
    const updatedConsumers = tableConsumers.map((tableConsumer) => {
      if (tableConsumer.name === consumer) {
        tableConsumer.billPart = tableConsumer.billPart + billPart;

        tableConsumer.consumedProducts = [
          ...tableConsumer.consumedProducts,
          consumedProduct,
        ];

        return tableConsumer;
      }
      return tableConsumer;
    });

    setTableConsumers(updatedConsumers);
  };

  const splitBill = () => {
    products.forEach((product) => {
      const currentValue = product.price / product.consumers.length;

      product.consumers.forEach((consumer) =>
        updateConsumedProducts(currentValue, product, consumer)
      );
    });
  };

  return (
    <ContextUser.Provider
      value={{
        amountBill,
        arrayAvatar,
        clients,
        logUser,
        products,
        registerUser,
        setClients,
        setProducts,
        setUser,
        tableConsumers,
        user,
      }}>
      {children}
    </ContextUser.Provider>
  );
};
