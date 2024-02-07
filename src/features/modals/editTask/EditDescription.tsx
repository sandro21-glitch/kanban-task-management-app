import ModalLabel from "../../../ui/ModalLabel";
type EditDescTypes = {
  editedDesc: string;
  setEditedDesc: (desc: string) => void;
};
const EditDescription = ({ editedDesc, setEditedDesc }: EditDescTypes) => {
  return (
    <div className="mb-4">
      <ModalLabel forId="editedDesc" name="Desctiption" />
      <textarea
        value={editedDesc}
        onChange={(e) => setEditedDesc(e.target.value)}
        name="editedDesc"
        id="editedDesc"
        className="w-full border outline-none rounded-md p-2 h-auto max-h-[150px]"
      ></textarea>
    </div>
  );
};

export default EditDescription;
