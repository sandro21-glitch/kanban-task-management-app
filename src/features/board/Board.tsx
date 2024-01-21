import { useAppSelector } from "../../hooks/reduxHooks";
import AddNewColumnBtn from "./AddNewColumnBtn";
import BoardColumns from "./BoardColumns";
import BoardNoCols from "./BoardNoCols";
import { selectActiveBoard } from "./boardsSlice";

const Board = () => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const activeBoard = useAppSelector(selectActiveBoard);
  if (activeBoard && activeBoard.boardTodos.length == 0) {
    return <BoardNoCols />;
  }
  return (
    <section
      className={`w-full h-[90vh] p-5 flex gap-5 ${
        darkMode ? "bg-boardColorDark" : "bg-boardColor"
      }`}
    >
      <BoardColumns />
      <AddNewColumnBtn />
    </section>
  );
};

export default Board;
