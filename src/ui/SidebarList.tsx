import { useState } from "react";
import { useTasksContext } from "../context/TasksContext";
import Button from "./Button";
import CreateBoardBtn from "./CreateBoardBtn";
import boardIcon from "/assets/board-icon.svg";
type SidebarType = {
  setOpenBoardForm: (open: boolean) => void;
};
const SidebarList = ({ setOpenBoardForm }: SidebarType) => {
  const { state, setActiveBoardIndex } = useTasksContext();
  const { board } = state;
  const [isActiveBoard, setIsActiveBoard] = useState<number | null>(null);
  const handleActiveBoardList = (index: number): void => {
    setIsActiveBoard(index);
    setActiveBoardIndex(index);
  };
  return (
    <div>
      <h6 className="text-lightGray font-bold tracking-wider p-5">
        ALL BOARDS <span>({board.length})</span>
      </h6>
      <ul>
        {board.map((singleBoard, index) => {
          return (
            <li onClick={() => handleActiveBoardList(index)} key={index}>
              <Button
                img={boardIcon}
                text={singleBoard.boardName}
                isActive={index === isActiveBoard}
              />
            </li>
          );
        })}
      </ul>
      <CreateBoardBtn setOpenBoardForm={setOpenBoardForm} />
    </div>
  );
};
export default SidebarList;
