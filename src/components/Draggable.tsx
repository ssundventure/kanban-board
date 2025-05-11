import { useDraggable } from "@dnd-kit/core";
import styled from "styled-components";

const Button = styled.button`
  width: 100px;
  height: 50px;
`;

type DraggableProps = {
  children: string;
  id:string|number;
};

function Draggable(props: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <Button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </Button>
  );
}

export default Draggable;
