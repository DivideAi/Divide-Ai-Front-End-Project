import styled from 'styled-components'
import { Main } from '../../styles/main'



export const StyledRegisterPage = styled(Main)`
    dislplay: flex;
    
    p{
        width: 320px;
    }

    @media(min-width: 640px){
        border: 2px solid #3295AD;
        border-radius: 10px;
        width: 60%;
        margin: 1rem auto;
    }
`