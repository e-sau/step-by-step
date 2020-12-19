import React from "react";
import PropTypes from "prop-types";
import { TaskItemLink } from "./styled.sc";
import { Subject } from "../../models/Subject";

export function AvailableSubjectPreview( props ) {
  const { subject } = props;

  return (
    <TaskItemLink to={ `/subjects/${ subject.slug }` }>
      { subject.title }
    </TaskItemLink>
  );
}

AvailableSubjectPreview.propTypes = {
  subject: PropTypes.instanceOf( Subject )
};
