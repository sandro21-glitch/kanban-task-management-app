import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useAppSelector } from "../../hooks/reduxHooks";
import BoardColumns from "./BoardColumns";
import AddNewColumnBtn from "./AddNewColumnBtn";

import BoardNoCols from "./BoardNoCols";
import { selectActiveBoard } from "./boardsSlice";
import NoBoards from "./NoBoards";

const Board = () => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const { boards } = useAppSelector((store) => store.board);

  const activeBoard = useAppSelector(selectActiveBoard);
  if (activeBoard && activeBoard.boardTodos.length == 0) {
    return <BoardNoCols />;
  }
  return (
    <section
      className={`w-full overflow-x-scroll mt-10 p-5 flex gap-5 ${
        darkMode ? "bg-boardColorDark" : "bg-boardColor"
      }`}
    >
      {boards.length < 1 ? (
        <NoBoards />
      ) : (
        <DndProvider backend={HTML5Backend}>
          <BoardColumns />
          <AddNewColumnBtn />
        </DndProvider>
      )}
    </section>
  );
};

export default Board;
