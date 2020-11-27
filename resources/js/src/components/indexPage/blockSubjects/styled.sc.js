import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Message = styled("div")`
    .text_marked {
        margin: 0;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04em;
        color: #E33371;
    }
    .text_regular {
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;

        letter-spacing: 0.04em;

        color: #484848;
    }
`;
export const Container = styled("div")`
    display: grid;
    z-index: 10;
    grid-template-rows: auto auto auto;
    gap: 25px;
    padding: 40px;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1), 10px 10px 20px rgba(71, 145, 219, 0.2);
    border-radius: 4px;

    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const SubjectsGrid = styled("div")`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 20px;

  @media (max-width: 420px) {
    grid-template-columns: none;
    grid-template-rows: auto;
  }
`;

export const Link = styled( RouterLink )`
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.04em;

    color: #E33371;
    text-decoration: none;
    text-transform: none;
`;
