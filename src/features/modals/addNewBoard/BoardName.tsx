import { useAppSelector } from "../../../hooks/reduxHooks";

const BoardName = () => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  return (
    <div className="flex flex-col mb-5">
      <label
        htmlFor=""
        className={`${
          darkMode ? "text-white" : "text-lightGray"
        } font-semibold text-[.8rem] mb-1`}
      >
        Board Name
      </label>
      <input
        type="text"
        placeholder="e.g Web Development"
        className={`outline-none border border-borderColor p-2 text-[.9rem] rounded-md ${
          darkMode ? "bg-darkMode text-white" : "bg-white text-black"
        }`}
      />
    </div>
  );
};

export default BoardName;
