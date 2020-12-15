import React from "react";
import PropTypes from "prop-types";
import { Loader } from "../components/ui/Loader";

export default function SubjectsPage( props ) {
  const { slug, fetchSubjectWithTasks, selectedSubject, isFetching } = props;

  if ( isFetching ) {
    return <Loader/>;
  }

  if ( slug && !selectedSubject ) {
    fetchSubjectWithTasks( slug );
  }

  console.log({ props });
  return null;
}

SubjectsPage.propTypes = {
  slug: PropTypes.string,
  subjectsList: PropTypes.array,
  selectedSubject: PropTypes.any,
  fetchSubjectWithTasks: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};