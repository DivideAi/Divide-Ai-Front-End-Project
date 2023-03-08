import { Header } from '../../components/Header';
import Avatar1   from '../../assets/avatar1.png';
import { StyledDiv } from './styles'
import { useContext } from 'react';
import { ContextUser } from '../../providers/ContextUser';
import { useNavigate } from 'react-router-dom';

// interface iName {
//     name: string
//     preventDefault: any
//     target: any
//     event: any

// }

export const NamePeople = () =>{
    
    const { user, setClient } = useContext(ContextUser)
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

        setClient(arrayNamePeople)
        navigate('/shareproducts')
 
     }

    const backToCounter = () =>{
        navigate('/counterpage')
    }
    
    return(
        <StyledDiv>
           <Header/>
           <div>
                <p>Agora preciso dos nomes de cada uma dessas pessoas</p>
           </div>
           <form onSubmit={(event)=> namePeople(event)}>
           <ul>
            {user.map((element => {
                return(
                    <li key={element}>
                    <img src={Avatar1} alt="avatarPerfil" />
                    <input type="text" placeholder="Nome"/>
                </li>
                    )
                }))}
           </ul>
           <div className='buttons'>
            <button type='submit'>Continuar</button>
            <button onClick={()=> backToCounter()}>Retornar</button>
           </div>
          
            </form>
        </StyledDiv>
    )
}