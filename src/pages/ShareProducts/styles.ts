import styled from "styled-components";

export const StyledMain = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 3rem;

@media(min-width: 640px){
    border: 2px solid #3295AD;
    border-radius: 10px;
    padding: 3rem;
    width: 60%;
    margin: 4rem auto;
}

.sub-title{
    text-align: center;
    padding: 1rem 5rem;
}
`