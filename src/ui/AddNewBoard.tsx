import { BoardTypes } from "../types/StateTypes";
import { useTasksContext } from "../context/TasksContext";

type Props = {
  data: BoardTypes;
  setOpenBoardForm: (open: boolean) => void;
};

const AddNewBoard = ({ data, setOpenBoardForm }: Props) => {
  const { addNewBoard } = useTasksContext();
  const handleAddNewBoard = (): void => {
    addNewBoard(data);
    setOpenBoardForm(false);
  };
  return (
    <button type="button" onClick={handleAddNewBoard}>
      add Board
    </button>
  );
};

export default AddNewBoard;
