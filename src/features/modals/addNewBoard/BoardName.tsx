import ModalInput from "../../../ui/ModalInput";
import ModalLabel from "../../../ui/ModalLabel";
type BoardNameTypes = {
  setBoardName: (name: string) => void;
  boardName: string;
  submitted: boolean;
};
const BoardName = ({ setBoardName, boardName, submitted }: BoardNameTypes) => {
  return (
    <div className="flex flex-col mb-5">
      <ModalLabel forId="boardName" name="Board Name" />
      <ModalInput
        id="boardName"
        placeholder="e.g Web Development"
        value={boardName}
        onChange={setBoardName}
        isSubmited={submitted}
      />
    </div>
  );
};

export default BoardName;
