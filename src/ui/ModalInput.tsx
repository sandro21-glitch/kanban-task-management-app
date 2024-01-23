import { useAppSelector } from "../hooks/reduxHooks";

type InputTypes = {
  id: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

const ModalInput = ({ id, placeholder, value, onChange }: InputTypes) => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);

  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`outline-none border border-borderColor p-2 text-[.9rem] rounded-md ${
        darkMode ? "bg-darkMode text-white" : "bg-white text-black"
      }`}
    />
  );
};

export default ModalInput;
