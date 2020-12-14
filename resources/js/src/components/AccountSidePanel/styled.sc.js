import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import { colorsMap } from "../../common/colors";

export const GridContainer = styled("div")`
  background: #FFFFFF;
  box-shadow: 10px 10px 20px rgba(71, 145, 219, 0.2);
  border-radius: 4px;
  
  padding: 40px 20%;
  display: grid;
  grid-auto-rows: max-content;
  gap: 48px;
  margin-bottom: 40px;
`;

export const StyledListItem = styled( ListItem )`
  color: ${ (props) => props.selected ? colorsMap.active : colorsMap.primary } !important;
  .item_icon {
    color: inherit  !important;
  }
  background-color: transparent !important;
`;
