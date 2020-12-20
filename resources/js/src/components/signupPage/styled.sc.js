import styled from "styled-components";

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
    
    @media (max-width: 420px) {
      grid-template-columns: 40% 60%;
    }
`;

export const FormLeftSide = styled("div")`
    padding: 20px;
    border-right: 1px solid #ddd;
    border-radius: 6px 0 0 6px;
    background: linear-gradient(34deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.6549021565495208) 21%, rgba(1,181,234,0.2651257987220448) 61%, rgba(0,212,255,0.6708765974440895) 91%);
    height: 700px;
    display: grid;
    grid-template-rows: 10% 90%;

    article {
      margin-top: 100px;
      span {
        display: block;
        font-style: italic;
        opacity: 0.9;
        padding: 10px;
        text-align: center;
      }
    }
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
