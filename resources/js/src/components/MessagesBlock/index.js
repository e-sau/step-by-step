import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MessagePreview } from "../MessagePreview";
import { SearchContainer } from "./styled.sc";

export function MessagesBlock( props ) {
  const { chats } = props;

  return (
    <Fragment>
      <SearchContainer className="search">
        <FontAwesomeIcon icon={ faSearch } />
        <input type="text" placeholder="Поиск"/>
      </SearchContainer>
      <div>
        { chats.map( item => (
          <MessagePreview key={ item.id } { ...item } />
        )) }
      </div>
    </Fragment>
  );
}

MessagesBlock.propTypes = {
  chats: PropTypes.arrayOf( PropTypes.shape({
    id: PropTypes.number.isRequired,
    fullName: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired,
    unread: PropTypes.bool
  })).isRequired
};
