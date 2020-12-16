import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { faCheck, faAward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Task } from "../../models/Task";
import { Step } from "../ui/Step";
import { TaskContainer, StepsGrid, Controls, Wrapper } from "./styled.sc";

export function TaskView( props ) {
  const { task } = props;
  const [ completed, setCompleted ] = useState( task.completed );

  /**
   * @return { JSX.Element|null }
   **/
  function renderWrapper() {
    if ( !completed ) {
      return null;
    }
    return (
      <Wrapper>
        <FontAwesomeIcon
          className="medal_icon"
          icon={ faAward }
        />
      </Wrapper>
    );
  }

  return (
    <TaskContainer>
      <div className="description">{ task.description }</div>

      <StepsGrid>
        <Step color="primary">Прочти задачу</Step>
        <Step>Запиши ответ</Step>
      </StepsGrid>

      <div className="image">

      </div>
      <Controls className="controls">
        <TextField
          className="input"
          variant={ "outlined" }
          onChange={ () => console.log("onChange") }
        />
        <FontAwesomeIcon
          className="check"
          icon={ faCheck }
          onClick={ () => setCompleted( true ) }
        />
      </Controls>
      { renderWrapper() }
    </TaskContainer>
  );
}

TaskView.propTypes = {
  task: PropTypes.instanceOf( Task ).isRequired
};
