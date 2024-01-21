import { useEffect } from "react";
import { useAppSelector } from "../../../hooks/reduxHooks";
type BoardNameTypes = {
  editedBoardName: string;
  setEditedBoardName: (name: string) => void;
  name: string;
};
const EditBoardName = ({
  editedBoardName,
  setEditedBoardName,
  name,
}: BoardNameTypes) => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);

  useEffect(() => {
    setEditedBoardName(name);
  }, [name]);
  return (
    <div className="flex flex-col mb-5">
      <label
        htmlFor="boardName"
        className={`${
          darkMode ? "text-white" : "text-lightGray"
        } font-semibold text-[.8rem] mb-1`}
      >
        {name}
      </label>
      <input
        id="boardName"
        type="text"
        placeholder="e.g Web Development"
        value={editedBoardName}
        onChange={(e) => setEditedBoardName(e.target.value)}
        className={`outline-none border border-borderColor p-2 text-[.9rem] rounded-md ${
          darkMode ? "bg-darkMode text-white" : "bg-white text-black"
        }`}
      />
    </div>
  );
};

export default EditBoardName;
