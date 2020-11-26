import styled from "styled-components";

export const Wrapper = styled("div")`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const StyledContainer = styled("div")`
    display: grid;
    grid-template-rows: 1fr;
    position: relative;

    .background {
        &_image {
           width: 100%;
        }
        &_overflow {
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.08) 10.42%, rgba(71, 145, 219, 0.31) 59.8%);
        }
    }
    .content {
       background: none;
       display: grid;
       grid-row-gap: 45px;
       grid-template-columns: 45% auto;
       grid-template-rows: 35% auto;

        &_text {
            padding-left: 100px;
            font-style: normal;
            font-weight: 900;
            font-size: 36px;
            line-height: 49px;
            letter-spacing: 0.04em;

            align-self: end;
            color: #4791DB;
        }

        .login_form {
            padding-left: 100px;
            grid-row: 2;
        }
    }
    @media (max-width: 420px) {
      .content_text {
        font-size: 16px;
        line-height: 20px;
      } 
    }
`;

