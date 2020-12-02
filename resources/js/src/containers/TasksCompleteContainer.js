import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeModelAttribute, photoSelect, updateProfile } from "../store/user/actions";
import { CompletedTasks } from "../components/accountPage/completedTasks";

/**
 * Мапим параметры из стора, которые нужны нашей странице
 * @param { Object } state
 * @return { Object }
 **/
function mapStateToProps( state ) {
    const { auth: { isAuthorized }, user: { model } } = state;
    return {
        isAuthorized,
        user: model,
    };
}

const mapDispatchToProps = ( dispatch ) =>
    bindActionCreators({
        onChange: changeModelAttribute,
        onSubmit: updateProfile,
        onPhotoSelect: photoSelect
    }, dispatch );

/** Отдаем на использование подготовленный контейнер */
export default connect( mapStateToProps, mapDispatchToProps )( CompletedTasks );
