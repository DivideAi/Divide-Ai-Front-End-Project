import { useEffect } from 'react'
import { Header } from '../../components/Header'
import { FormProducts } from '../../components/FormProducts'
import { StyledMain } from './styles'
import { Navbar } from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { isLogged } from '../../scripts/localStorage'


export const ShareProducts = () =>{
  const navigation = useNavigate()

  useEffect(() => {
    if (!isLogged()) {
      navigation(-1);
    }
  }, [])
  
    return(
      <>
      <Navbar logout/>
        <StyledMain>
            <Header description='Ótimo, agora eu preciso que você me informe os itens consumidos e quais pessoas consumiram'/>
            <FormProducts/>
        </StyledMain>
      </>
    )
}
