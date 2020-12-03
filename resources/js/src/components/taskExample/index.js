import React from "react";
import PropTypes from "prop-types";
import { TaskItem, StepsGrid } from "./styled.sc";
import { Step } from "../ui/Step";

export function TaskExample( props ) {
    const { title, shortAnswer, shortQuestion } = props;
    return (
        <TaskItem>
            <h3 className="title">{ title }</h3>
            <StepsGrid>
                <Step color="primary">{ shortQuestion }</Step>
                <Step>{ shortAnswer }</Step>
            </StepsGrid>
        </TaskItem>
    );
}

TaskExample.propTypes = {
    title: PropTypes.string.isRequired,
    shortQuestion: PropTypes.string.isRequired,
    shortAnswer: PropTypes.string.isRequired,
};
