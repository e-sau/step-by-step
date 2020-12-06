import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../ui/Button";
import { Spacer } from "../../ui/Spacer";
import { Container, Message, Link, SubjectsGrid } from "./styled.sc";
import { Subject } from "../../../models/Subject";

export function SubjectSelect( props ) {
  const { subjects } = props;

  function renderSubjects() {
    return subjects.map( (subject) => {

      return (
        <Button key={ subject.id } color="primary">
          <Link to={ `/subjects/${ subject.id }` }>
            { subject.title }
          </Link>
        </Button>
      );
    });
  }

  return (
    <Container>
      <Message className="message">
        <h3 className={ "text_marked" }>Выберите предмет</h3>
        <Spacer size={ 4 }/>
        <span className={ "text_regular" }>Попробуйте демо-версию бесплатно</span>
      </Message>
      <SubjectsGrid className="subjects">
        { renderSubjects() }
      </SubjectsGrid>
      <Link to={ "/tasks" }>Все предметы</Link>
    </Container>
  );
}

SubjectSelect.propTypes = {
  subjects: PropTypes.arrayOf(
    PropTypes.instanceOf( Subject )
  ).isRequired,
};
