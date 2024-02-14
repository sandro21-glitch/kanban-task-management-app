import ModalInput from "../../../ui/ModalInput";
import ModalLabel from "../../../ui/ModalLabel";
type EditTitleTypes = {
  editedTitle: string;
  setEditedTitle: (title: string) => void;
  isSubmited: boolean;
};
const EditTitle = ({
  editedTitle,
  setEditedTitle,
  isSubmited,
}: EditTitleTypes) => {
  return (
    <div className="mb-4">
      <ModalLabel forId="editedTitle" name="Title" />
      <ModalInput
        id="editedTitle"
        isSubmited={isSubmited}
        value={editedTitle}
        placeholder=""
        onChange={setEditedTitle}
      />
    </div>
  );
};

export default EditTitle;
