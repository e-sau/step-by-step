import React from "react";
import PropTypes from "prop-types";
import { TaskItem, StepsGrid } from "./styled.sc";
import { Step } from "../ui/Step";

export function TaskExample( props ) {
  const { description, firstStep, secondStep, taskComponent } = props;

  const Component = taskComponent;

  return (
    <TaskItem>
      <p className="description">{ description }</p>
      <div className="inputs">
        <Component />
      </div>
      <StepsGrid>
        <Step color="primary">{ firstStep }</Step>
        <Step>{ secondStep }</Step>
      </StepsGrid>
    </TaskItem>
  );
}

TaskExample.propTypes = {
  description: PropTypes.string.isRequired,
  firstStep: PropTypes.string.isRequired,
  secondStep: PropTypes.string.isRequired,
  taskComponent: PropTypes.instanceOf( Function )
};
