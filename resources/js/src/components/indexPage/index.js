import React from "react";
import { Preview } from "./blockPreview";
import { Features } from "./blockFeatures";
import SubjectsSelectContainer from "../../containers/SubjectsSelectContainer";
import { ExampleTasks } from "./blockExample";


export default function ( props ) {
    return (
        <React.Fragment>
            <Preview/>
            <SubjectsSelectContainer/>
            <Features/>
            <ExampleTasks/>
        </React.Fragment>
    );
}
