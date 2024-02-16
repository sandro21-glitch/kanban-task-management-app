import { useDrop } from "react-dnd";
import { useAppDispatch } from "../hooks/reduxHooks";
import { dragTodos } from "../features/board/boardsSlice";
interface DroppableAreaProps {
  children: React.ReactNode;
  todoId: string;
}

const DroppableArea = ({ children, todoId }: DroppableAreaProps) => {
  const dispatch = useAppDispatch();
  const [, drop] = useDrop({
    accept: "SINGLE_TASK",
    drop: (item: { taskId: string }) => {
      const { taskId } = item;
      dispatch(dragTodos({ taskId, todoId }));
      // console.log(`task: ${item.taskId}, column:${todoName}`);
    },
  });

  return <div ref={drop}>{children}</div>;
};

export default DroppableArea;
