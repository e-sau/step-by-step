import React from "react";
import PropTypes from "prop-types";
import { TaskItemLink, StepsGrid } from "./styled.sc";
import { Step } from "../ui/Step";

export function TaskPreview( props ) {
  const { id, description, firstStep, secondStep, taskComponent } = props;

  const Component = taskComponent;

  return (
    <TaskItemLink to={ `/tasks/${ id }` }>
      <p className="description">{ description }</p>
      <div className="inputs">
        <Component />
      </div>
      <StepsGrid>
        <Step color="primary">{ firstStep }</Step>
        <Step>{ secondStep }</Step>
      </StepsGrid>
    </TaskItemLink>
  );
}

TaskPreview.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  firstStep: PropTypes.string.isRequired,
  secondStep: PropTypes.string.isRequired,
  taskComponent: PropTypes.instanceOf( Function )
};
