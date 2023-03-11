import styled from 'styled-components';

export const StyledDiv = styled.div`
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

    .container-counter{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;

        p{
            text-align: center;
            padding: 1rem 3rem;
        }
    }

    .counter{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 3rem;

        h1{
            border: 1px solid #FFFFFF;
            border-radius: 10px;
            padding: 1rem 2rem;
            font-size: 89px;
        }
    }
`