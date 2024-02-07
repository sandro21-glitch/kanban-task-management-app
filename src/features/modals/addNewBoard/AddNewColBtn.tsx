import { useAppSelector } from "../../../hooks/reduxHooks";
type NewColTypes = {
  setBoardCols: (cols: string[]) => void;
  boardCols: string[];
};
const AddNewColBtn = ({ setBoardCols, boardCols }: NewColTypes) => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);

  const handleAddCols = () => {
    const prevCols = [...boardCols, "Doing"];
    setBoardCols(prevCols);
  };

  return (
    <button
      onClick={() => handleAddCols()}
      type="button"
      className={`rounded-full w-full ${
        darkMode ? "bg-white" : "bg-sidebarHover hover:bg-transparent"
      }  py-2 mb-6
      text-mediumPurple font-bold  transition-all ease-in duration-150`}
    >
      + Add New Column
    </button>
  );
};

export default AddNewColBtn;
