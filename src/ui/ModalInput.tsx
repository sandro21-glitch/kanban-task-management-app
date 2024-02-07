import { useAppSelector } from "../hooks/reduxHooks";

type InputTypes = {
  id: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  isSubmited: boolean;
};

const ModalInput = ({
  id,
  placeholder,
  value,
  onChange,
  isSubmited,
}: InputTypes) => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);

  return (
    <div className="w-full relative">
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${
          !value && isSubmited ? "border-red-500" : ""
        } outline-none border border-borderColor p-2 text-[.9rem] rounded-md ${
          darkMode ? "bg-darkMode text-white" : "bg-white text-black w-full"
        }`}
      />
      {!value && isSubmited && (
        <p className="text-red-500 absolute right-3 top-3 text-[.75rem]">
          Can't be empty
        </p>
      )}
    </div>
  );
};

export default ModalInput;
