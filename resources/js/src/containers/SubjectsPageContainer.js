import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SubjectsPage from "../pages/SubjectsPage";
import { fetchSubjectWithTasks } from "../store/subject/actions";

/**
 * Мапим параметры из стора, которые нужны нашей странице
 * @param { Object } state
 * @param { Object } ownProps
 *
 * @return { Object }
 **/
function mapStateToProps( state, ownProps ) {
  const { subject: { list: subjectsList, selected, isFetching }, task: { list: tasksList } } = state;

  return {
    tasksList,
    subjectsList,
    isFetching,
    selectedSubject: selected,
    slug: ownProps?.match?.params?.slug
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({
    fetchSubjectWithTasks
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( SubjectsPage );
