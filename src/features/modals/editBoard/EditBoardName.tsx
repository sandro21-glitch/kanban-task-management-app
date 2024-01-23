import { useEffect } from "react";
import { useAppSelector } from "../../../hooks/reduxHooks";
import ModalInput from "../../../ui/ModalInput";
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
      <ModalInput
        id="boardName"
        value={editedBoardName}
        onChange={setEditedBoardName}
        placeholder="e.g Web Development"
      />
    </div>
  );
};

export default EditBoardName;
