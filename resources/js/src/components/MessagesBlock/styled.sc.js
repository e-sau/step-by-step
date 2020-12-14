import styled from "styled-components";

export const SearchContainer = styled("div")`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 4px 4px 8px rgba(71, 145, 219, 0.2);
  color: #A5A5A5;
  padding: 0 20px;
  
  input {
    padding: 20px 0;
        font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    
    letter-spacing: 0.04em;
    border: none;
    
    &:hover, &:focus {
      border: none;
      outline: none;
    }
  }
`;