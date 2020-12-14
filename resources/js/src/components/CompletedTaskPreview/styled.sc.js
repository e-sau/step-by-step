import { Link } from "react-router-dom";
import styled from "styled-components";

export const TaskItemLink = styled( Link )`
    transition: 0.8s ease-out;
    display: grid;
    row-gap: 12px;
    grid-template-rows: 1fr 1fr 1fr;

    padding: 40px 50px;
    text-decoration: unset;
    color: #000000;

    height: 155px;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1), 0px 0px 20px rgba(71,145,219,0.2);
    border-radius: 4px;

    &:hover {
       background: #dddd;
      transform: translate(0, 10px);
    }
`;

export const CardHeading = styled( "div" )`
    margin-left: 50px;
    letter-spacing: 0.04em;

    .main {
        margin: 0;
        font-size: 16px;
        line-height: 19px;
    }

    .sub {
        font-weight: 300;
        font-size: 14px;
        line-height: 20px;
    }
`;

export const CardRow= styled( "div" )`
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr;
    gap: 24px;
    letter-spacing: 0.04em;
    color: #000000;

    .row_icon {
        width: 24px;
    }

    .headers {
        .main {
            margin: 0;
            margin-bottom: 5px;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
        }

        .sub {
            font-weight: 300;
            font-size: 14px;
            line-height: 20px;
        }
    }
`;

