import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Divider, List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

/**
 * Страница задач, теоритически хранить будет выбор класса\предмета и переход к заданию
 * Возможно в виде плитки, с индекаторами прогресса,
 *
 * @todo сейчас Компановка ради логики, код плохой, и разнесется все на компоненты, ее можно переделывать как угодно
 **/
export function TasksPage( props ) {
    const { fetchGrades, gradeOnClick, subjectOnClick, gradesList, subjectsList, tasksList } = props;

    useEffect(() => {
        fetchGrades();
    }, []);

    function bindIdToAction( id, actionCreator ) {
        return () => actionCreator( id );
    }

    return (
        <div>
            <h3>grades</h3>
            <List component="nav" aria-label="main mailbox folders" style={{ display: "flex"}}>
                { gradesList.map( ({ title, id }) => (
                    <ListItem
                        key={ id }
                        onClick={ bindIdToAction( id, gradeOnClick ) }
                    >
                        <ListItem button>
                            <ListItemText primary={ title } />
                        </ListItem>
                    </ListItem>
                ))  }
            </List>

            <Divider/>
            <div>
                <h3>Subjects</h3>
                <List component="nav" aria-label="main mailbox folders" style={{ display: "flex"}}>
                    { subjectsList.map( ({ title, id }) => (
                        <ListItem
                            key={ id }
                            onClick={ bindIdToAction( id, subjectOnClick ) }
                        >
                            <ListItem button>
                                <ListItemText primary={ title } />
                            </ListItem>
                        </ListItem>
                    ))  }
                </List>
            </div>

            <Divider/>
            <div>
                <h3>Tasks</h3>
                <List component="nav" aria-label="main mailbox folders" style={{ display: "flex"}}>
                    { tasksList.map( ({ title, id }) => (
                        /** подставлять стараницу конкретной задачи, это заглушка */
                        <Link key={ id } to={ `/tasks/${ id }` }>
                            <ListItem >
                                <ListItem button>
                                    <ListItemText primary={ title } />
                                </ListItem>
                            </ListItem>
                        </Link>
                    ))  }
                </List>
            </div>
        </div>
    );
}
TasksPage.propTypes = {
    fetchGrades: PropTypes.func.isRequired,
    gradeOnClick: PropTypes.func.isRequired,
    subjectOnClick: PropTypes.func.isRequired,
    gradesList: PropTypes.array.isRequired,
    subjectsList: PropTypes.array.isRequired,
    tasksList: PropTypes.array.isRequired,
};
