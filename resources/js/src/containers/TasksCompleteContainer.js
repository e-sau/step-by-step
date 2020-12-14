import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CompletedTasks } from "../components/CompletedTasks";
import { fetchCompletedRequest } from "../store/subject/actions";

/**
 * Мапим параметры из стора, которые нужны нашей странице
 * @param { Object } state
 * @return { Object }
 **/
function mapStateToProps( state ) {
  const { auth: { isAuthorized }, user: { model }, subject: { completed, completedIsFetching } } = state;

  return {
    isAuthorized,
    user: model,
    completedTaskList: completed,
    isFetching: completedIsFetching,
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({ fetchCompletedRequest }, dispatch );
}

/** Отдаем на использование подготовленный контейнер */
export default connect( mapStateToProps, mapDispatchToProps )( CompletedTasks );
