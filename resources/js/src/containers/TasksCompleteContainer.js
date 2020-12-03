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

    /** @todo доделать на финальном этапе */
    const mockSubject = { id: 1, subject: "Математика в картинках", grade: 1, middleScore: 5, completeDate: "28.10.2020" };

    return {
        isAuthorized,
        user: model,
        /** @todo доделать на финальном этапе */
        completedTaskList: Array(12).fill( mockSubject )
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
