import styled from 'styled-components';

export const StyledDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 3rem;

@media(min-width: 640px){
    border: 2px solid #3295AD;
    border-radius: 10px;
    padding: 3rem;
    width: 60%;
    margin: 4rem auto;
}
form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
}
div{
    text-align: center;
    padding: 1rem 5rem;
}

ul{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
}

li{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    width: 30%;
    

    input{
        border: none;
        text-align: center;
        color: #FFFFFF;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        :focus{
            outline: 1px solid #34B9DA;
        }
        
    ::placeholder{
        color: #FFFFFF;
        text-align: center;
    }
    }
    
}
    

`