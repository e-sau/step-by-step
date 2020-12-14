import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { CompletedTaskPreview } from "../CompletedTaskPreview";

const GridContainer = styled("div")`
    padding-left: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 48px;
`;

/**
 * Отрисовка грида с выполненными задачами
 **/
export function CompletedTasks( props ) {
  const { completedTaskList, fetchCompletedRequest } = props;

  useEffect(() => {
    fetchCompletedRequest();
  }, []);

  /**
   * Отрисовка списка выполенных зазач
   * @return { JSX[] }
   **/
  function renderTasks() {
    /** @todo выкосить idx когда будем работать с нормальными данными */
    return completedTaskList.map(( task, idx ) => (
      <CompletedTaskPreview key={ `${ task.id }-${ idx }` } { ...task } />
    ));
  }

  return (
    <GridContainer>
      { renderTasks() }
    </GridContainer>
  );
}

CompletedTasks.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  fetchCompletedRequest: PropTypes.func.isRequired,
  completedTaskList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      subject: PropTypes.string.isRequired,
      grade: PropTypes.number.isRequired,
      middleScore: PropTypes.number.isRequired,
      completeDate: PropTypes.string.isRequired,
    })
  )
};