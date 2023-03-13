/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar1 from '../assets/avatar1.svg';
import Avatar2 from '../assets/avatar2.svg';
import Avatar3 from '../assets/avatar3.svg';
import Avatar4 from '../assets/avatar4.svg';
import Avatar5 from '../assets/avatar5.svg';
import Avatar6 from '../assets/avatar6.svg';
import Avatar7 from '../assets/avatar7.svg';
import Avatar8 from '../assets/avatar8.svg';
import { iProducts } from '../components/FormProducts';
import { iLoginForm } from '../components/Forms/LoginForm';
import { iRegisterForm } from '../components/Forms/RegisterForm.tsx';
import { setToken } from '../scripts/localStorage';
import { callToast } from '../scripts/Toast';
import { api } from '../services/api';

interface iUserProviderChildren {
  amountBill: number;
  arrayAvatar: string[];
  clearConsumedProducts: () => void;
  clients: string[];
  incrementServiceFee: () => void;
  logUser: (data: iLoginForm) => Promise<void>;
  products: iProducts[];
  registerUser: (data: iRegisterForm) => Promise<void>;
  setClients: React.Dispatch<React.SetStateAction<string[]>>;
  setProducts: React.Dispatch<React.SetStateAction<iProducts[]>>;
  splitBill: () => void;
  setUser: React.Dispatch<React.SetStateAction<number[]>>;
  tableConsumers: iTableConsumers[];
  user: number[];
  clearProducts: () => void;
}

interface iUserChildren {
  children: React.ReactNode;
}

export interface iTableConsumers {
  avatar: string;
  billPart: number;
  name: string;
  consumedProducts: iProducts[];
}

export const ContextUser = createContext({} as iUserProviderChildren);

export const UserProvider = ({ children }: iUserChildren) => {
  const [amountBill, setAmountBill] = useState(0);
  const [clients, setClients] = useState([] as string[]);
  const [products, setProducts] = useState([] as iProducts[]);
  const [tableConsumers, setTableConsumers] = useState([] as iTableConsumers[]);
  const [user, setUser] = useState([] as number[]);

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

  useEffect(() => {
    setNewTableConsumers();
  }, [clients]);

  useEffect(() => {
    if (products.length) {
      const newAmountBill = products.reduce(
        (acc, product) => acc + Number(product.price),
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

  const clearConsumedProducts = () => {
    const updatedConsumers = tableConsumers.map((tableConsumer) => {
      tableConsumer.consumedProducts = [];
      return tableConsumer;
    });

    setTableConsumers(updatedConsumers);
  };

  const incrementServiceFee = () => {
    const serviceFee = amountBill * (10 / 100);
    const partialServiceFee = serviceFee / tableConsumers.length;
    setAmountBill(amountBill + serviceFee);

    console.log(serviceFee);

    const updatedTableConsumers = tableConsumers.map((currentConsumer) => {
      currentConsumer.billPart = currentConsumer.billPart + partialServiceFee;
      return currentConsumer;
    });

    setTableConsumers(updatedTableConsumers);
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

  const splitBill = () => {
    products.forEach((product) => {
      const currentValue = product.price / product.consumers.length;
      console.log('context ==>', product);

      product.consumers.forEach((consumer) =>
        updateConsumedProducts(currentValue, product, consumer)
      );
    });
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

  const clearProducts = () =>{
    setTableConsumers([])
    setProducts([])

  }

  return (
    <ContextUser.Provider
      value={{
        amountBill,
        arrayAvatar,
        clearConsumedProducts,
        clients,
        incrementServiceFee,
        logUser,
        products,
        registerUser,
        setClients,
        setProducts,
        setUser,
        splitBill,
        tableConsumers,
        clearProducts,
        user,
      }}
    >
      {children}
    </ContextUser.Provider>
  );
};
