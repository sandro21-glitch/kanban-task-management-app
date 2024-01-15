import AddNewColumnBtn from "./AddNewColumnBtn";
import BoardColumns from "./BoardColumns";

const Board = () => {
  return (
    <section className="w-full h-[90vh] p-5 flex gap-5 bg-boardColor">
      <BoardColumns />
      <AddNewColumnBtn />
    </section>
  );
};

export default Board;
