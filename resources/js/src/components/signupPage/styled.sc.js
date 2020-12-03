import styled from "styled-components"

export const PageContainer = styled("div")`
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
    padding: 20px;
    border-right: 1px solid #ddd;
    border-radius: 6px 0 0 6px;
    background: linear-gradient(309deg, rgba(70,43,3,1) 0%, rgba(255,183,77,1) 57%, rgba(221,221,221,1) 100%);

    display: grid;
    grid-template-rows: 90% 10%;
`;

export const HelperLinks = styled( "div")`
    display: grid;
    justify-content: center;
`;

export const FormRightSide = styled("div")`
    background-color: #fafafa;
    border-radius: 0 6px 6px 0;

     display: grid;
     grid-template-rows: 15% 80% 5%;
     padding: 30px 10px;
`;

export const ControlsContainer = styled("div")`
    margin: 0px auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 20px;
`;
