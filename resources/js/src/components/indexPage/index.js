import React from "react";
import Preview from "./preview";
import SubjectsSelectContainer from "../../containers/SubjectsSelectContainer";
import {Features} from "./features";

export default function ( props ) {
    return (
        <React.Fragment>
            <Preview/>
            <SubjectsSelectContainer/>
            <Features/>
        </React.Fragment>
    );
}
