import React from "react";
import PropTypes from "prop-types";
import { ColumnsGrid, MessageContainer } from "./styled.sc";

export function MessagePreview( props ) {
  const { photo, fullName, message, dateTime, unread } = props;

  return (
    <MessageContainer className="message">
      <img className="photo" src={ photo } alt="photo"/>
      <ColumnsGrid className="content">
        <div className="contact-fio">{ fullName }</div>
        <div className="text_preview">{ message }</div>
      </ColumnsGrid>
      <ColumnsGrid className="info">
        <div>{ dateTime }</div>
        { unread && <div className="has_new"/> }
      </ColumnsGrid>
    </MessageContainer>
  );
}

MessagePreview.defaultProps = {
  photo: "/images/no-avatar.png"
};

MessagePreview.propTypes = {
  photo: PropTypes.string,
  fullName: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  unread: PropTypes.bool
};
