import { createContext, useState } from 'react';
import { iProducts } from '../components/FormProducts';

interface iUserProviderChildren {
    user: number[]
    setUser: React.Dispatch<React.SetStateAction<number[]>>
    products: iProducts[]
    setProducts: React.Dispatch<React.SetStateAction<iProducts[]>>
    client: any
    setClient: React.Dispatch<React.SetStateAction<any>>
}

export const ContextUser = createContext({} as iUserProviderChildren);

interface iUserChildren {
    children: React.ReactNode;
}


export const UserProvider = ({ children }: iUserChildren) =>{

    const [user, setUser] = useState([] as number[])
    const [products, setProducts] = useState([] as iProducts[])
    const [client, setClient] = useState([] as any)

    return(
        <ContextUser.Provider
        value={{
            user,
            setUser,
            products,
            setProducts,
            client,
            setClient
        }}
        >
            { children }
        </ContextUser.Provider>
    )

}
