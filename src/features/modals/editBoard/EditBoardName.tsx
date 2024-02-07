import { useEffect } from "react";
import ModalInput from "../../../ui/ModalInput";
import ModalLabel from "../../../ui/ModalLabel";
type BoardNameTypes = {
  editedBoardName: string;
  setEditedBoardName: (name: string) => void;
  name: string;
  submitted: boolean;
};
const EditBoardName = ({
  editedBoardName,
  setEditedBoardName,
  name,
  submitted
}: BoardNameTypes) => {
  useEffect(() => {
    setEditedBoardName(name);
  }, [name, setEditedBoardName]);
  return (
    <div className="flex flex-col mb-5">
      <ModalLabel forId="boardName" name={name} />
      <ModalInput
        id="boardName"
        value={editedBoardName}
        onChange={setEditedBoardName}
        placeholder="e.g Web Development"
        isSubmited={submitted}
      />
    </div>
  );
};

export default EditBoardName;
