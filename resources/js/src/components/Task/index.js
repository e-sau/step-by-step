import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { faCheck, faAward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Task } from "../../models/Task";
import { Step } from "../ui/Step";
import icereamImg from "./icream-on-stick.png";
import { TaskContainer, StepsGrid, Controls, Wrapper, HelpMessage } from "./styled.sc";

export function TaskView( props ) {
  const { task, onSolve } = props;

  const [ completed, setCompleted ] = useState( task.completed );
  const [ answer, setAnswer ] = useState( "" );
  const [ helpMessage, setHelpMessage ] = useState( "" );

  /**
   * @return { void }
   **/
  function handleChangeAnswer( event ) {
    setAnswer( event.target.value );
  }

  /**
   * @return { void }
   **/
  function setMessageToUser( message, timeout = 3000 ) {
    setHelpMessage( message );
    setTimeout( setHelpMessage, timeout );
  }

  /**
   * @return { void }
   **/
  function handleConfirmAnswer() {
    if ( task.solution === answer ) {
      onSolve( task.id );
      setCompleted( true );
      setMessageToUser("Верно!");
    } else {
      setMessageToUser( task.help );
    }
  }

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
      <img className="image" src={ task.image } alt="image"/>
      <Controls className="controls">
        <TextField
          value={ answer }
          className="input"
          variant={ "outlined" }
          onChange={ handleChangeAnswer }
        />
        <FontAwesomeIcon
          className="check"
          icon={ faCheck }
          onClick={ handleConfirmAnswer }
        />
        <HelpMessage show={ Boolean(helpMessage) }>{ helpMessage }
          <img src={ icereamImg } alt="icecream"/>
        </HelpMessage>
      </Controls>
      { renderWrapper() }
    </TaskContainer>
  );
}

TaskView.propTypes = {
  task: PropTypes.instanceOf( Task ).isRequired,
  onSolve: PropTypes.func.isRequired,
};
