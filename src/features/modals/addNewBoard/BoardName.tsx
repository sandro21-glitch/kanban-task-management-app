import { useAppSelector } from "../../../hooks/reduxHooks";
type BoardNameTypes = {
  setBoardName: (name: string) => void;
  boardName: string;
};
const BoardName = ({ setBoardName, boardName }: BoardNameTypes) => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  return (
    <div className="flex flex-col mb-5">
      <label
        htmlFor=""
        className={`${
          darkMode ? "text-white" : "text-lightGray"
        } font-semibold text-[.8rem] mb-1`}
      >
        Board Name
      </label>
      <input
        type="text"
        placeholder="e.g Web Development"
        value={boardName}
        onChange={(e) => setBoardName(e.target.value)}
        className={`outline-none border border-borderColor p-2 text-[.9rem] rounded-md ${
          darkMode ? "bg-darkMode text-white" : "bg-white text-black"
        }`}
      />
    </div>
  );
};

export default BoardName;
