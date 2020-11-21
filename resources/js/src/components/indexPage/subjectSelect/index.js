import React from "react";
import { Button } from "../../ui/Button";
import { Spacer } from "../../Spacer";
import { Container, Message, Link, SubjectsGrid } from "./styled.sc";

export function SubjectSelect( props ) {
    const { subjects } = props;

    function renderSubjects() {
        return subjects.map( () => {
            return (
                <Button className="login" color="primary">
                    <Link className="link_login" to={ "/login" }>
                        Войти
                    </Link>
                </Button>
            );
        })
    }

    return (
        <Container>
            <Message className="message">
                <h3 className={ "text_marked" }>Выберите предмет</h3>
                <Spacer size={ 4 }/>
                <span className={ "text_regular" }>Попробуйте демо-версию бесплатно</span>
            </Message>
            <SubjectsGrid className="subjects">
                { renderSubjects() }
            </SubjectsGrid>
            <Link to={ "/tasks" }>Все предметы</Link>
        </Container>
    );
}

SubjectSelect.defaultProps = {
    subjects: []
};
