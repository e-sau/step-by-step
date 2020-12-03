import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { TasksPage } from "../components/tasksPage";
import { fetchRequest as fetchGrades, click as gradeOnClick } from "../store/grade/actions";
import { click as subjectOnClick } from "../store/subject/actions";

/**
 * Мапим параметры из стора, которые нужны нашей странице
 * @param { Object } state
 * @return { Object }
 **/
function mapStateToProps( state ) {
    const {
        auth: { isAuthorized },
        grade: { list: gradesList, isFetching: gradeIsFetching },
        subject: { list: subjectsList, isFetching: subjectIsFetching },
        task: { list: tasksList, isFetching: taskIsFetching }
    } = state;

    return {
        gradeIsFetching, subjectIsFetching, taskIsFetching,
        isAuthorized, gradesList, subjectsList, tasksList,
    };
}

/** Мапим и оборачиваем функцией dispatch, все actionCreators */
const mapDispatchToProps = ( dispatch ) => bindActionCreators({
    gradeOnClick, subjectOnClick, fetchGrades,
}, dispatch);

/** Отдаем на использование подготовленный контейнер */
export default connect( mapStateToProps, mapDispatchToProps )( TasksPage );
