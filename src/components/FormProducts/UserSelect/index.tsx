import { useEffect, useState } from "react"
import { iTableConsumers } from "../../../providers/ContextUser"
import { UserSelectStyled } from './styles'
import AllPeople from '../../../assets/Group/all.svg';

interface iUserSelectProps {
  consumer?: iTableConsumers;
  all?: boolean;
  userFunction?: (element: string) => void
  allFunction: () => void;
  allConsumers: string[]
}


export const UserSelect = ({consumer, all, userFunction, allFunction, allConsumers}: iUserSelectProps) =>{

  const [selectedUser, setSelectedUser] = useState(false)

  const ChangeSelectedBorder = () =>{
    if(consumer){
      if(allConsumers.includes(consumer?.name)){
        setSelectedUser(true)
    }else{
        setSelectedUser(false)
    }
    }
  }

  useEffect(() =>{
    ChangeSelectedBorder()
  }, [])

  const SelectUser = () =>{
    
    if(all){
      allFunction()
    }else if(userFunction && consumer){
      userFunction(consumer.name) 
    }
  }

  return(
    <UserSelectStyled onClick={SelectUser} selected={selectedUser}>
      <img src={all? AllPeople : consumer?.avatar} alt="Avatar"/>
      <p>{all? 'Todos': consumer?.name}</p>
    </UserSelectStyled>
  )
}
