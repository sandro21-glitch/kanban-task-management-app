import crossIcon from "/assets/icon-cross.svg";

const ColumnList = () => {
  return (
    <div className="mb-5">
      <label className="text-lightGray font-semibold text-[.8rem] mb-1">
        Board Columns
      </label>
      <ul className="flex flex-col gap-3">
        <li className="flex items-center">
          <input
            type="text"
            placeholder="e.g Todo"
            className="outline-none border p-2 text-[.9rem] w-full"
          />
          <button className="ml-5">
            <img src={crossIcon} alt="remove icon" />
          </button>
        </li>
        <li className="flex items-center">
          <input
            type="text"
            placeholder="e.g Todo"
            className="outline-none border p-2 text-[.9rem] w-full"
          />
          <button className="ml-5">
            <img src={crossIcon} alt="remove icon" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ColumnList;
