import ModalInput from "../../../ui/ModalInput";
import ModalLabel from "../../../ui/ModalLabel";
type BoardNameTypes = {
  setBoardName: (name: string) => void;
  boardName: string;
};
const BoardName = ({ setBoardName, boardName }: BoardNameTypes) => {
  return (
    <div className="flex flex-col mb-5">
      <ModalLabel forId="boardName" name="Board Name" />
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
