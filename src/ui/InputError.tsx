type InputErrorTypes = {
  text: string;
};
const InputError = ({ text }: InputErrorTypes) => {
  return <p className="text-red-500 absolute right-12 text-[.75rem]">{text}</p>;
};

export default InputError;
