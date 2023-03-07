import { createContext, useState } from 'react';

interface iUserProviderChildren {
    user: number[]
    setUser: React.Dispatch<React.SetStateAction<number[]>>
}
export const ContextUser = createContext({} as iUserProviderChildren);

interface iUserChildren {
    children: React.ReactNode;
}


export const UserProvider = ({ children }: iUserChildren) =>{

    const [user, setUser] = useState([] as number[])

    return(
        <ContextUser.Provider
        value={{
            user,
            setUser,
        }}
        >
            { children }
        </ContextUser.Provider>
    )

}
