import styled from "styled-components";

export const BodyContainer = styled("div")`
  display: grid;
  row-gap: 40px;
  text-align: center;
  margin-bottom: 80px;
`;

export const LinkContainer = styled( "div" )`
   padding: 50px 0;
   
  .link {
    transition: 0.5s cubic-bezier(0, -0.04, 0.04, 0.73);
    text-decoration: unset;
    font-size: 1.5em;
    display: block;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1), 10px 10px 20px rgba(71,145,219,0.2);
    border-radius: 4px;
    padding: 40px;
    
    &:hover {
      color: #E33371;
      transform: translate(0, 10px);
    }
  }
`;