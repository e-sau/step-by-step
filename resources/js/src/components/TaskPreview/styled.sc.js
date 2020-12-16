import styled from "styled-components";

export const TaskItemLink = styled( "div" )`
  display: grid;
  grid-template-rows: auto 1fr auto;
  
  transition: 0.8s ease-out;
  
  user-select: none;
  padding: 40px;
  text-align: left;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1), 10px 10px 20px rgba(71, 145, 219, 0.2);
  border-radius: 4px;
  width: 505px;
  height: 292px;
  margin: 0 10px;

  &:first-of-type {
    margin-left: 100px;
  }
  
  &:hover {
    filter: brightness(0.9);
    transform: translate(0, 10px);
  }

  .description {
    margin: 0;
    text-align: left;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.04em;
    color: #000000;
  }
  
  .inputs {
    align-self: center;
    
    img {
     width: 100%;
    }
  }

  @media (max-width: 420px) {
    &:first-of-type {
      margin-left: 50px;
    }
  }
`;

export const StepsGrid = styled( "div" )`
  display: grid;
  grid-template-columns: auto auto;
`;
