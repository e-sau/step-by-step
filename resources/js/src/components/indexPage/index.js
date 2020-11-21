import React from "react";
import {SubjectSelect} from "./subjectSelect";
import Preview from "./preview";

export default function ( props ) {
    return (
        <React.Fragment>
            <Preview/>
            <SubjectSelect/>
        </React.Fragment>

    );
}
