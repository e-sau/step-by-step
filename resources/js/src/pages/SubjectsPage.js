import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Loader } from "../components/ui/Loader";
import { GoBackLink } from "../components/ui/GoBackLink";
import { Subject } from "../models/Subject";
import { Task } from "../models/Task";
import { TaskView } from "../components/Task";
import { BodyContainer, LinkContainer } from "./styles/subjectsPageStyles.sc";
import {Link} from "react-router-dom";

export default function SubjectsPage( props ) {
  const {
    slug, fetchSubjectWithTasks, selectedSubject, isFetching,
    tasksList, subjectsList, solveTask, fetchSubjects
  } = props;

  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
    if ( slug ) {
      fetchSubjectWithTasks( slug );
    } else {
      fetchSubjects();
    }
  }, [slug]);

  if ( isFetching || ( slug && !selectedSubject ) ) {
    return <Loader/>;
  }

  function renderPageBody() {
    if ( !slug ) {
      return (
        <LinkContainer>
          {
            subjectsList.map( subject => (
              <Link key={ subject.id } className="link" to={ `/subjects/${ subject.slug }` }>
                { subject.title }
              </Link>
            ))
          }
        </LinkContainer>
      );
    }
    return (
      <BodyContainer>
        <h1>{ selectedSubject.title }</h1>
        { tasksList.map( (item) => (
          <TaskView key={ item.id } task={ item } onSolve={ solveTask } />
        )) }
      </BodyContainer>
    );
  }

  return (
    <div>
      <GoBackLink to={ "/" }>
        На главную
      </GoBackLink>
      { renderPageBody() }
    </div>
  );
}

SubjectsPage.propTypes = {
  slug: PropTypes.string,
  tasksList: PropTypes.arrayOf( PropTypes.instanceOf( Task ) ),
  subjectsList: PropTypes.arrayOf( PropTypes.instanceOf( Subject ) ),
  selectedSubject: PropTypes.instanceOf( Subject ),
  fetchSubjectWithTasks: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  solveTask: PropTypes.func.isRequired,
  fetchSubjects: PropTypes.func.isRequired,
};