import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SubjectsList } from "../components/SubjectsList";
import { fetchAvailableRequest } from "../store/subject/actions";
import { AvailableSubjectPreview } from "../components/AvailableSubjectPreview";

/**
 * Мапим параметры из стора, которые нужны нашей странице
 * @param { Object } state
 * @return { Object }
 **/
function mapStateToProps( state ) {
  const { auth: { isAuthorized }, user: { model }, subject: { available, availableIsFetching } } = state;

  return {
    isAuthorized,
    user: model,
    list: available,
    isFetching: availableIsFetching,
    Component: AvailableSubjectPreview
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({ fetchRequest: fetchAvailableRequest }, dispatch );
}

/** Отдаем на использование подготовленный контейнер */
export default connect( mapStateToProps, mapDispatchToProps )( SubjectsList );
