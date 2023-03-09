import { createContext, useState } from 'react';
import { iProducts } from '../components/FormProducts';
import Avatar1 from '../assets/avatar1.png'
import Avatar2 from '../assets/avatar2.png'
import Avatar3 from '../assets/avatar3.png'
import Avatar4 from '../assets/avatar4.png'
import Avatar5 from '../assets/avatar5.svg'
import Avatar6 from '../assets/avatar6.svg'
import Avatar7 from '../assets/avatar7.svg'
import Avatar8 from '../assets/avatar8.png'

interface iUserProviderChildren {
    user: number[]
    setUser: React.Dispatch<React.SetStateAction<number[]>>
    products: iProducts[]
    setProducts: React.Dispatch<React.SetStateAction<iProducts[]>>
    client: any
    setClient: React.Dispatch<React.SetStateAction<any>>
    avatar: string[]

}

export const ContextUser = createContext({} as iUserProviderChildren);

interface iUserChildren {
    children: React.ReactNode;
}


export const UserProvider = ({ children }: iUserChildren) =>{

    const [user, setUser] = useState([] as number[])
    const [products, setProducts] = useState([] as iProducts[])
    const [client, setClient] = useState([] as any)
    const [avatar, setAvatar] = useState([
        Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6, Avatar7, Avatar8,
        Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6, Avatar7, Avatar8,
        Avatar1, Avatar2, Avatar3, Avatar4,
    ] as string[])
    
    return(
        <ContextUser.Provider
        value={{
            user,
            setUser,
            products,
            setProducts,
            client,
            setClient,
            avatar
        }}
        >
            { children }
        </ContextUser.Provider>
    )

}
