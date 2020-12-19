import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Subject } from "../../models/Subject";
import { NotFoundMessage, GridContainer } from "./styled.sc";

/**
 * Отрисовка грида с выполненными задачами
 **/
export function SubjectsList( props ) {
  const { list, fetchRequest, Component } = props;

  useEffect(() => {
    fetchRequest();
  }, []);

  /**
   * Отрисовка списка выполенных зазач
   * @return { JSX[]|JSX.Element }
   **/
  function renderSubjects() {
    if ( !list.length ) {
      return <NotFoundMessage>Предметы не найдены</NotFoundMessage>;
    }
    return list.map(( item, idx ) => (
      <Component key={ `${ item.id }-${ idx }` } subject={ item } />
    ));
  }

  return (
    <GridContainer>
      { renderSubjects() }
    </GridContainer>
  );
}

SubjectsList.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  fetchRequest: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.instanceOf( Subject )
  ),
  Component: PropTypes.instanceOf( Function )
};
