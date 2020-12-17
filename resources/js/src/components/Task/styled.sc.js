import styled from "styled-components";

export const TaskContainer = styled( "div" )`
  position: relative;
  display: grid;
  grid-template-columns: 60% 38%;
  gap: 1%;
  grid-template-rows: max-content;
  row-gap: 20px;
  height: 285px;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1), 10px 10px 20px rgba(71,145,219,0.2);
  border-radius: 4px;
  padding: 40px;
  user-select: none;
  
  align-items: center;

  .description {
    margin: 0;
    text-align: left;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
  }
`;

export const Controls = styled("div")`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  align-self: center;
  
  input {
    font-size: 1.8em;
  }
  .check {
    color: #dddddd;
    transition: 0.4s cubic-bezier(0.42, 0, 0, 1.1);
    padding: 0 20px;
    cursor: pointer;
    font-size: 3em;
    
    &:hover {
      color: #1f711e;
    }
  }
`;

export const StepsGrid = styled( "div" )`
  display: grid;
  grid-template-columns: auto auto;
  align-self: start;
`;

export const Wrapper = styled("div")`
  position: absolute;
  display: grid;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  text-align: center;
  width: 100%;
  height: 100%;

  background: rgb(6 71 187 / 10%);
  z-index: 10;
  font-size: 5em;
  color: #02bb00;
`;

export const HelpMessage = styled( "div" )`
  display: ${ props => props.show ? "grid" : "none" };
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr auto;
  text-align: right;
  gap: 10px;
  font-size: 3em;
  font-style: italic;
  color: #116f00;
  
  img {
    width: 50px;
  }
`;
