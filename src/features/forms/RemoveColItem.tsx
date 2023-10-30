import crossIcon from "/assets/icon-cross.svg";
type RemoveCols = {
  removeColInputByIndex: (index: number) => void;
  index: number;
};
const RemoveColItem = ({ removeColInputByIndex, index }: RemoveCols) => {
  return (
    <button type="button" onClick={() => removeColInputByIndex(index)}>
      <img src={crossIcon} alt="cross icon" />
    </button>
  );
};
export default RemoveColItem;
