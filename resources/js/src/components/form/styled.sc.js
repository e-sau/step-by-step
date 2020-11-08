import styled from "styled-components";

export const Form = styled("form")`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80%;

    & .MuiTextField-root {
        width: 80%;
        margin: 8px;
    }
`;
