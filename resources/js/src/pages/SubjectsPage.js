import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Loader } from "../components/ui/Loader";
import { GoBackLink } from "../components/ui/GoBackLink";
import { Subject } from "../models/Subject";
import { Task } from "../models/Task";
import { SubjectSelect } from "../components/SubjectSelect";

import { TaskView } from "../components/Task";
import { BodyContainer } from "./styles/subjectsPageStyles.sc";

export default function SubjectsPage( props ) {
  const { slug, fetchSubjectWithTasks, selectedSubject, isFetching, tasksList, subjectsList } = props;
  // const isNeedFetchSubject = slug && ( !subjectsList || subjectsList.slug !== slug );

  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
    fetchSubjectWithTasks( slug );
  }, []);


  // if ( isNeedFetchSubject ) {
  //   fetchSubjectWithTasks( slug );
  // }

  if ( isFetching || ( slug && !selectedSubject ) ) {
    return <Loader/>;
  }

  function renderPageBody() {
    if ( !slug ) {
      return <SubjectSelect subjects={ subjectsList }/>;
    }
    return (
      <BodyContainer>
        <h1>{ selectedSubject.title }</h1>
        { tasksList.map( (item) => (
          <TaskView key={ item.id } task={ item }/>
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
};