import { useAppSelector } from "../../../hooks/reduxHooks";

const AddNewColBtn = () => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  return (
    <button
      className={`rounded-full w-full ${
        darkMode ? "bg-white" : "bg-sidebarHover hover:bg-transparent"
      }  py-2 mb-6
      text-mediumPurple font-bold  transition-all ease-in duration-150`}
    >
      + Add New Column
    </button>
  );
};

export default AddNewColBtn;
