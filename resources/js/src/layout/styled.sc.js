import styled from "styled-components";

export const StyledContainer = styled("div")`
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;

    @media (min-width: 1440px) {
        width: 1440px;
        margin: 0 auto;
    }

    .page-body {
         min-width: 100%;
    }
`;

export const StyledHeader = styled("header")`
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 30px 100px;

    .site_name {
        color: #4791DB;
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 37px;

        letter-spacing: 0.04em;
        text-decoration: none;
        align-self: center;
    }

    button.login {
        justify-self: end;
        text-transform: none;
        background-color: #4791DB;
        padding: 0;

        & .link_login {
            line-height: 16px;
            letter-spacing: 0.04em;
            font-weight: 500;
            font-size: 18px;
        }
    }
`;

export const StyledFooter = styled("footer")`
    display: grid;
    grid-template-columns: 20% 60% 20%;
    padding: 30px 100px;
    background-color: #4791DB;
    align-items: center;

    .info-rows {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-gap: 10px;

        .link {
            color: #ffffff;
            text-decoration: none;

            .text {
                padding: 0 10px;
            }
        }
    }

    .social-networks {
        justify-self: center;
        font-size: 25px;

        .brand-icon {
            margin: 0 10px;
            color: #ffffff;
        }
    }
`;
