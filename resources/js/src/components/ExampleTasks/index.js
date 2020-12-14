import React from "react";
import { TaskPreview } from "../TaskPreview";
import { ContainerGrid } from "./styled.sc";
import { HorizontalScroll } from "../ui/HorizontalScroll";
import { examples } from "./examples";

/**
 * Отрисовка списка примеров задач
 * @return { JSX.Element }
 **/
export function ExampleTasks() {
  return (
    <ContainerGrid>
      <h3 className="heading">Примеры заданий</h3>
      <HorizontalScroll className="previews">
        { examples.map( (item) => (
          <TaskPreview key={ item.id } { ...item }/>
        )) }
      </HorizontalScroll>
    </ContainerGrid>
  );
}
