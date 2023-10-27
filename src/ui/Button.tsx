type ButtonTypes = {
  img: string;
  text: string;
  isActive: boolean;
  onClick?: () => void;
};
const Button = ({ img, text, isActive, onClick }: ButtonTypes) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive ? "bg-mediumPurple text-white" : ""
      } capitalize font-bold text-lightGray flex items-center
     gap-3 py-3 px-6 w-[90%] cursor-pointer hover:bg-hoverGray
      hover:text-mediumPurple rounded-r-3xl transition-all ease-in duration-150`}
    >
      <img src={img} alt="hide sidebar" />
      {text}
    </button>
  );
};
export default Button;
