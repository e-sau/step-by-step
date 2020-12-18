import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SubjectsList } from "../components/SubjectsList";
import { fetchCompletedRequest } from "../store/subject/actions";
import { CompletedSubjectPreview } from "../components/CompletedSubjectPreview";

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
    list: completed,
    isFetching: completedIsFetching,
    Component: CompletedSubjectPreview
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({ fetchRequest: fetchCompletedRequest }, dispatch );
}

/** Отдаем на использование подготовленный контейнер */
export default connect( mapStateToProps, mapDispatchToProps )( SubjectsList );
