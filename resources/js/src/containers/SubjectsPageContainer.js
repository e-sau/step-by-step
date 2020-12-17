import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SubjectsPage from "../pages/SubjectsPage";
import { fetchSubjectWithTasks, fetchAll } from "../store/subject/actions";
import { solveTask } from "../store/task/actions";
import { sortByObjectKey } from "../common/helpers";

/**
 * Мапим параметры из стора, которые нужны нашей странице
 * @param { Object } state
 * @param { Object } ownProps
 *
 * @return { Object }
 **/
function mapStateToProps( state, ownProps ) {
  const { subject: { list: subjectsList, selected, isFetching, error }, task: { list: tasksList } } = state;

  return {
    error,
    subjectsList,
    isFetching,
    selectedSubject: selected,
    slug: ownProps?.match?.params?.slug,
    tasksList: sortByObjectKey( "difficult", tasksList ),
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({
    fetchSubjectWithTasks,
    solveTask,
    fetchSubjects: fetchAll
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( SubjectsPage );
