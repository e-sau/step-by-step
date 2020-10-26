import styled from "styled-components"

export const PageContainer = styled("div")`
    display: flex;
    flex-direction: column;
`;

export const FormContainer = styled("div")`
    height: 100%;
    margin: 0 auto;
    width: 80%;
    padding: 50px;

    max-width: 900px;

    display: grid;
    grid-template-columns: 50% 50%;
`;

export const FormLeftSide = styled("div")`
    border-right: 1px solid #ddd;
    border-radius: 6px 0 0 6px;
    // background-color: #ffb74d;

    background: linear-gradient(309deg, rgba(70,43,3,1) 0%, rgba(255,183,77,1) 57%, rgba(221,221,221,1) 100%);
`;

export const FormRightSide = styled("div")`
    background-color: #fafafa;
    border-radius: 0 6px 6px 0;

     display: grid;
     grid-template-rows: 10% 60% 30%;
     padding: 30px 10px;
`;

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
