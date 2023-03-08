import styled from "styled-components";

export const StyledForm = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 3rem;

.inputs{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
}

input{
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    padding: 1rem 5rem;
    color: #FFFFFF;
    text-align: start;

    ::placeholder{
        text-align: start;
        color: #FFFFFF;
    }

    :focus{
            outline: 1px solid #FFFFFF;
        }
}

ul{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;

    li{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    width: 30%;

    img{
        width: 50px;
        height: 50px;
    }
}
}

.buttons{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

`