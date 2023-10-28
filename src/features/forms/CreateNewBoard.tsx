import React, { useState } from "react";

const CreateNewBoard = () => {
  const [boardName, setBoardName] = useState("");
  const [boardColList, setBoardColList] = useState([
    {
      name: "Todo",
    },
    {
      name: "Doing",
    },
  ]);
  const [colItem, setColItem] = useState("");
  const handleAddColList = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setBoardColList((prevState) => [...prevState, { name: colItem }]);
    setColItem("");
  };
  console.log(boardColList);
  return (
    <div className="absolute left-0 top-0 right-0 bottom-0 z-10">
      <div className=" bg-black opacity-30 w-screen h-screen absolute"></div>
      <div
        className="relative z-10 flex justify-between items-center
         w-full mx-auto  h-full"
      >
        <form
          onSubmit={handleAddColList}
          className="bg-white p-[32px] rounded-xl w-full max-w-[480px] mx-auto"
        >
          <h3>Add new board</h3>
          <div>
            <div>
              <label htmlFor="name">Board Name</label>
              <input
                type="text"
                value={boardName}
                placeholder="e.g Web Design"
                onChange={(e) => setBoardName(e.target.value)}
              />
            </div>
            <div>
              <label>Board Columns</label>
              // need fix
              {/* {boardColList.map((boardCol, index) => {
                return <input type="text" key={index} value={boardCol.name} />;
              })} */}
            </div>
          </div>
          <button type="submit">Add New Col</button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewBoard;
