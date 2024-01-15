import { useAppSelector } from "../../hooks/reduxHooks";
import AddNewColumnBtn from "./AddNewColumnBtn";
import BoardColumns from "./BoardColumns";

const Board = () => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
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
