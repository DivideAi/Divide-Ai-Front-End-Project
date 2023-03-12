import { Header } from '../../components/Header';
import { StyledMain } from './styles'
import { useContext } from 'react';
import { ContextUser } from '../../providers/ContextUser';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';

export const NamePeople = () =>{
    
    const { user, setClients, arrayAvatar } = useContext(ContextUser)
    const navigate = useNavigate();


    const namePeople = (event: any) => {
        event.preventDefault()
        const response = [...event.target]
        const arrayNamePeople = [] as string[]
       response.forEach((element => {
            if(element.value){
                arrayNamePeople.push(element.value)
            }
        }))

        setClients(arrayNamePeople) 
        navigate('/shareproducts')
 
     }

    const backToCounter = () =>{
        navigate('/counterpage')
    }
    
    return(
      <>
      <Navbar logout/>
        <StyledMain>
           <Header description='Agora preciso dos nomes de cada uma dessas pessoas'/>
           <form onSubmit={(event)=> namePeople(event)}>
            <ul>
                {user.map((element: number, index: number) => {
                    return(
                    <li key={element}>
                        <img src={arrayAvatar[index]} alt="avatarPerfil" />
                        <input type="text" placeholder="Nome"/>
                    </li>
                        )
                    })}
            </ul>
            <div className='buttons'>
                <button type='submit'>Continuar</button>
                <button onClick={()=> backToCounter()}>Retornar</button>
            </div>
        </form>
        </StyledMain>
        </>
    )
}
