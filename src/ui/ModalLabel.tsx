import { useAppSelector } from "../hooks/reduxHooks";
type LabelTypes = {
  forId: string;
  name: string;
};
const ModalLabel = ({ forId, name }: LabelTypes) => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  return (
    <label
      htmlFor={forId}
      className={`${
        darkMode ? "text-white" : "text-lightGray"
      } font-semibold text-[.8rem] mb-1`}
    >
      {name}
    </label>
  );
};

export default ModalLabel;
