import styled from "styled-components";

export const GridContainer = styled("div")`
  padding-left: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 48px;
`;

export const NotFoundMessage = styled("div")`
  font-size: 2em;
  font-style: italic;
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;