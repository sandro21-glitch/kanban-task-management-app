const BoardNoCols = () => {
  return (
    <div className="w-full h-[90vh] flex flex-col gap-5 justify-center items-center">
      <h3>This board is empty. Create a new column to get started.</h3>
      <button>+ Add a column</button>
    </div>
  );
};

export default BoardNoCols;
