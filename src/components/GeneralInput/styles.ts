import styled from "styled-components";

export const StyledInput = styled.input`
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    padding: 1rem 2rem;
    color: #FFFFFF;
    text-align: start;

    ::placeholder{
        text-align: start;
        color: #FFFFFF;
    }

    :focus{
        outline: 1px solid #FFFFFF;
    }

`;