import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const ContentContainer = styled("div")`
  display: grid;
  height: 100%;
  grid-template-columns: 400px auto;
  gap: 20px; 
`;

export const Link = styled( RouterLink )`
  transition: 0.2s;
  color: #4791DB;
  align-items: center;
  text-decoration: unset;
  display: block;
  
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.04em;
  
  .svg-path {
     transition: 0.2s;
     fill: #4791DB;
  }
  
  &:hover {
   color: #E33371;
    .svg-path {
      fill: #E33371;
    }
  }
  
  .text {
    margin-left: 16px;
  }
`;