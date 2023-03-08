import { Header } from '../../components/Header'
import { FormProducts } from '../../components/FormProducts'
import { StyledMain } from './styles'


export const ShareProducts = () =>{
    return(
        <StyledMain>
            <Header/>
            <div className='sub-title'>
                <p>Ótimo, agora eu preciso que você me informe os itens consumidos e quais pessoas consumiram</p>
            </div>
            <FormProducts/>
            
        </StyledMain>
    )
}