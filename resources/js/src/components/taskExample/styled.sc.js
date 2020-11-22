import styled from "styled-components";

export const TaskItem = styled( "div" )`
    display: grid;
    grid-template-rows: 1fr auto;
    user-select: none;
    padding: 40px;

    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1), 10px 10px 20px rgba(71, 145, 219, 0.2);
    border-radius: 4px;
    width: 505px;
    height: 292px;
    margin: 0 10px;

    &:first-of-type {
        margin-left: 100px;
    }

    .title {
        text-align: left;
        font-weight: 500;
        font-size: 17px;
        line-height: 20px;
        letter-spacing: 0.04em;
        color: #000000;
    }
`;

export const StepsGrid = styled( "div" )`
    display: grid;
    grid-template-columns: auto auto;
`;
