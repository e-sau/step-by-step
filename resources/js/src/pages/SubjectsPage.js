import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Loader } from "../components/ui/Loader";
import { GoBackLink } from "../components/ui/GoBackLink";
import { Subject } from "../models/Subject";
import { Task } from "../models/Task";
import { SubjectSelect } from "../components/SubjectSelect";

import { TaskPreview } from "../components/TaskPreview";
import { examples } from "../components/ExampleTasks/examples";


//
export default function SubjectsPage( props ) {
  const { slug, fetchSubjectWithTasks, selectedSubject, isFetching, tasksList, subjectsList } = props;
  // const isNeedFetchSubject = slug && ( !subjectsList || subjectsList.slug !== slug );

  useEffect(() => {
    console.log("==============================="+ slug +"===============================================")
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
      <div>
        <h1>{ selectedSubject.title }</h1>
        { examples.map( (item) => (
          <TaskPreview key={ item.id } { ...item }/>
        )) }
      </div>
    );
  }

  return (
    <div>
      <GoBackLink to={ "/" }>
        На главную
      </GoBackLink>
      <div>
        { renderPageBody() }
      </div>
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