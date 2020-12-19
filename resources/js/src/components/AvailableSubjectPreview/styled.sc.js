import { Link } from "react-router-dom";
import styled from "styled-components";

export const TaskItemLink = styled( Link )`
    transition: 0.8s ease-out;
    display: grid;

    padding: 40px 50px;
    text-decoration: unset;
    color: #000000;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1), 0px 0px 20px rgba(71,145,219,0.2);
    border-radius: 4px;

    &:hover {
      background: #dddd;
      transform: translate(0, 10px);
    }
`;