import { useDroppable } from "@dnd-kit/core";
import React, { JSX } from "react";
import styled from "styled-components";

const Column = styled.div`
  width: 500px;
  height: 500px;
  margin: auto;
  background-color: #cecece;
  border-radius: 5px;
  text-align: center;
`;

const Text = styled.h2`
  font-size: 5rem;
`;

type DroppableProps = {
  children: string | JSX.Element;
};

function Droppable(props: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({ id: "droppable" });

  const style = {
    color: isOver ? "white" : undefined,
  };

  return (
    <Column ref={setNodeRef} style={style}>
      <Text> {props.children}</Text>
    </Column>
  );
}

export default Droppable;
