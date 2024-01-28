import vertIcon from "/assets/icon-vertical-ellipsis.svg";

type HeaderTypes = {
  taskName: string;
};
const OptionsHeader = ({ taskName }: HeaderTypes) => {
  return (
    <div className="flex justify-between items-center mb-5">
      <h5 className="font-bold">{taskName}</h5>
      <button>
        <img src={vertIcon} alt="vertical icon" />
      </button>
    </div>
  );
};

export default OptionsHeader;
