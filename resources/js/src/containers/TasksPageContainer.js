import React from "react";
import { connect } from "react-redux";
import { TasksPage } from "../components/tasksPage";
import { fetchRequest as fetchGrades, click as gradeOnClick } from "../domains/grade/actions";
import { click as subjectOnClick } from "../domains/subject/actions";

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
        gradeIsFetching, subjectIsFetching, taskIsFetching, /// индикаторы загрузки
        isAuthorized, gradesList, subjectsList, tasksList,  /// списки
    };
}

/**
 * Мапим и оборачиваем функцией dispatch, все actionCreators
 * @param { Function } dispatch
 * @return { Object }
 **/
function mapDispatchToProps( dispatch ) {
    return {
        fetchGrades: () => dispatch( fetchGrades() ),
        gradeOnClick: ( gradeId ) => () => {
            dispatch( gradeOnClick( gradeId ) )
        },
        subjectOnClick: ( subjectId ) => () => {
            dispatch( subjectOnClick( subjectId ) )
        },
    }
}

/** Отдаем на использование подготовленный контейнер */
export default connect( mapStateToProps, mapDispatchToProps )( TasksPage );
