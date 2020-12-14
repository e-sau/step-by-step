import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { User } from "../../models/User";
import { GridContainer, StyledListItem } from "./styled.sc";
import { ProfileCard } from "../profileCard";

export function SidePanel( props ) {
  const { user, navItems, selectedId, onSelect } = props;

  /**
  * Обработчик выбора элемента
  * @param { Number } id
  * @param { Boolean } canSelect
  * @return { Function }
  **/
  function handleItemSelect( id, canSelect = true ) {
    return () => canSelect && onSelect( id );
  }

  /**
   * Отрисовка списка элементов
   * @return { JSX[] }
   **/
  const renderNavItems = () => navItems.map( ( item ) => {
    const { id, icon, label, disable } = item;
    return (
      <StyledListItem button
        className={ "nav_item" }
        key={ id }
        disabled={ disable }
        selected={ selectedId === id }
        onClick={ handleItemSelect( id, disable ) }
      >
        <ListItemIcon className={ "item_icon" }>
          <FontAwesomeIcon icon={ icon } />
        </ListItemIcon>
        <ListItemText primary={ label } />
      </StyledListItem>
    );
  });

  return (
    <GridContainer>
      <ProfileCard user={ user }/>
      <List className={"nav"} component="nav">
        { renderNavItems() }
      </List>
    </GridContainer>
  );
}

SidePanel.propTypes = {
  user: PropTypes.instanceOf(User).isRequired,
  selectedId: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon:  PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
      disable: PropTypes.bool,
    })
  ).isRequired,
};
