import { useAppSelector } from "../../../hooks/reduxHooks";
import ModalInput from "../../../ui/ModalInput";
type BoardNameTypes = {
  setBoardName: (name: string) => void;
  boardName: string;
};
const BoardName = ({ setBoardName, boardName }: BoardNameTypes) => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  return (
    <div className="flex flex-col mb-5">
      <label
        htmlFor="boardName"
        className={`${
          darkMode ? "text-white" : "text-lightGray"
        } font-semibold text-[.8rem] mb-1`}
      >
        Board Name
      </label>
      <ModalInput
        id="boardName"
        placeholder="e.g Web Development"
        value={boardName}
        onChange={setBoardName}
      />
    </div>
  );
};

export default BoardName;
