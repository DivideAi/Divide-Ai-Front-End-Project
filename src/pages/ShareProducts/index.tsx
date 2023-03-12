import { Header } from '../../components/Header'
import { FormProducts } from '../../components/FormProducts'
import { StyledMain } from './styles'
import { Navbar } from '../../components/Navbar'


export const ShareProducts = () =>{
    return(
      <>
      <Navbar logout/>
        <StyledMain>
            <Header/>
            <div className='sub-title'>
                <p>Ótimo, agora eu preciso que você me informe os itens consumidos e quais pessoas consumiram</p>
            </div>
            <FormProducts/>
        </StyledMain>
      </>
    )
}
