import LogoDivideAi from '../../assets/Logo Header.png'
import { StyledHeader } from './styles'

export const Header = () =>{
    return(
        <StyledHeader>
            <img src={LogoDivideAi} alt="LogoDivideAi" />
            <p>Oi, esse é o Divide Aí!</p>
        </StyledHeader>
    )
}