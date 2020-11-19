import styled from "styled-components";

export const FormContainer = styled("div")`
    display: grid;
    grid-gap: 20px;
    grid-template-rows: auto;
`;

export const ControlsContainer = styled("div")`
    display: grid;
    grid-template-columns: 66% auto;
    align-items: center;

    .login {
        padding: 0;
        &_link {
            background-color: #4791DB;
            color: #ffffff;
            background: #4791DB;
            width: 100%;
            padding: 12px;
        }
    }

    .link {
        color: #484848;
        text-decoration: none;
        display: flex;
        padding: 0 20px;
    }
`;
