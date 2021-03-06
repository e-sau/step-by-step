import React from "react";
import PropTypes from "prop-types";
import { Button } from "../ui/Button";
import { Spacer } from "../ui/Spacer";
import { Container, Message, Link, SubjectsGrid } from "./styled.sc";
import { Subject } from "../../models/Subject";

/**
 * Выбор предмета в виде кнопок
 * @param { Object } props
 * @return { JSX.Element }
 **/
export function SubjectSelect( props ) {
  const { subjects } = props;

  /**
   * Отрисовка отдельного предмета как кнопку
   * @return { JSX[] }
   **/
  function renderSubjects() {
    return subjects.map( (subject) => (
      <Button key={ subject.slug } color="primary">
        <Link to={ `/subjects/${ subject.slug }` }>
          { subject.title }
        </Link>
      </Button>
    ));
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
      <Link to={ "/subjects" }>Все предметы</Link>
    </Container>
  );
}

SubjectSelect.propTypes = {
  subjects: PropTypes.arrayOf(
    PropTypes.instanceOf( Subject )
  ).isRequired,
};
