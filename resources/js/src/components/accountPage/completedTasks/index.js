import React from "react";
import styled from "styled-components";

const GridContainer = styled("div")`
    padding-left: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 48px;
`;

export function CompletedTasks() {
    return <GridContainer>{
        [1,2,3,4,5,6, 7, 8, 9, 10 ].map( i => <div style={{ height: 300 }}>{ i }</div>)
    }</GridContainer>;
}
