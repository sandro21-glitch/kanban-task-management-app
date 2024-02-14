type InputErrorTypes = {
  text: string;
  top?: string;
};
const InputError = ({ text, top }: InputErrorTypes) => {
  return (
    <p
      style={{ top: `${top}rem` }}
      className={`text-red-500 absolute right-12  text-[.75rem]`}
    >
      {text}
    </p>
  );
};

export default InputError;
