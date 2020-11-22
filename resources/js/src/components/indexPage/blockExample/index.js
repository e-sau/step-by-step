import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import { TaskExample } from "../../taskExample";
import { ContainerGrid } from "./styled.sc";

/**
 * @todo вынести и проработать в ракмказ задачи https://igorskipper.atlassian.net/browse/IS100-18
 **/
const items = [
    { id: 1, title: "Сколько всего литров компота?", shortQuestion: "Сложи числа", shortAnswer: "Запиши ответ" },
    { id: 2, title: "Сколько всего литров компота?", shortQuestion: "Сложи числа", shortAnswer: "Запиши ответ" },
    { id: 3, title: "Сколько всего литров компота?", shortQuestion: "Сложи числа", shortAnswer: "Запиши ответ" },
    { id: 4, title: "Сколько всего литров компота?", shortQuestion: "Сложи числа", shortAnswer: "Запиши ответ" }
]

export function ExampleTasks( props ) {
    return (
        <ContainerGrid>
            <h3 className="heading">Примеры заданий</h3>
            <HorizontalScroll className="previews">
                { items.map( (item) => (
                    <TaskExample key={ item.id } { ...item }/>
                )) }
            </HorizontalScroll>
        </ContainerGrid>
    );
}
