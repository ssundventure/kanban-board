import React, { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Draggable from "./components/Draggable";
import Droppable from "./components/Droppable";

function App() {
  const [isDroppped, setIsDroppped] = useState(false);

  const draggableMarkup = <Draggable id="draggable">Drag me</Draggable>;

  const handleDragEnd = (event: DragEndEvent) => {
    console.log(`event.over : ${event.over}   \n `);
    if (event.over && event.over.id === "droppable") {
      setIsDroppped(true);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDroppped ? draggableMarkup : null}
      <Droppable>{isDroppped ? draggableMarkup : "Drag here"}</Droppable>
    </DndContext>
  );
}

export default App;
