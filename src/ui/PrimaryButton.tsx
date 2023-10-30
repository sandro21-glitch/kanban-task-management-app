type ButtonProps = {
  type?: "button" | "submit" | "reset";
  text: string;
};

const PrimaryButton = ({ type = "button", text }: ButtonProps) => {
  return (
    <button
      type={type}
      className="bg-mediumPurple p-3 rounded-3xl w-full text-white capitalize font-bold hover:opacity-75 transition-all ease-in duration-150"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
