import React, { useRef, useState } from "react";
import PrimaryButton from "../../ui/PrimaryButton";
import RemoveColItem from "./RemoveColItem";
import { BoardTypes } from "../../types/StateTypes";
import useOutsideClick from "../../hooks/useClickOutside";
import AddNewBoard from "../../ui/AddNewBoard";
type FormType = {
  openBoardForm: boolean;
  setOpenBoardForm: (open: boolean) => void;
};
const CreateNewBoard = ({ openBoardForm, setOpenBoardForm }: FormType) => {
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

  const addNewCol = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedList = [...boardColList];
    updatedList[index].name = e.target.value;
    setBoardColList(updatedList);
  };

  const removeColInputByIndex = (index: number): void => {
    const updatedList = [...boardColList];
    updatedList.splice(index, 1);
    setBoardColList(updatedList);
  };

  const data: BoardTypes = {
    boardName: boardName,
    todos: boardColList.map((statusName) => ({
      status: statusName.name,
      statusTodos: [], //there we will push todoStatus data
    })),
  };
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleOutsideClick = () => {
    // handle outside click
    setOpenBoardForm(false);
  };

  useOutsideClick(formRef, handleOutsideClick);

  if (!openBoardForm) return null;
  return (
    <div className="absolute left-0 top-0 right-0 bottom-0 z-10">
      <div className=" bg-black opacity-30 w-screen h-screen absolute z-10"></div>
      <div className="relative z-10 flex justify-between items-center w-full mx-auto h-full">
        <form
          ref={formRef}
          onSubmit={handleAddColList}
          className="bg-white p-[32px] rounded-xl w-full max-w-[480px] mx-auto"
        >
          <h3 className="text-black font-bold mb-5">Add new board</h3>
          <div className="mb-5">
            <div className="flex flex-col mb-5">
              <label htmlFor="name" className="text-sm mb-1">
                Board Name
              </label>
              <input
                type="text"
                value={boardName}
                id="name"
                placeholder="e.g Web Design"
                onChange={(e) => setBoardName(e.target.value)}
                className="border p-2 outline-none rounded-md focus:border-mediumPurple transition-all ease-in duration-150"
              />
            </div>
            <div>
              <label htmlFor="cols" className="text-sm mb-1">
                Board Columns
              </label>
              <div className="flex flex-col gap-4">
                {boardColList.map((boardCol, index) => (
                  <div key={index} className="flex items-center  gap-3">
                    <input
                      id="cols"
                      type="text"
                      key={index}
                      value={boardCol.name}
                      onChange={(e) => addNewCol(e, index)}
                      className="border p-2 outline-none rounded-md w-full focus:border-mediumPurple transition-all ease-in duration-150"
                    />
                    <RemoveColItem
                      index={index}
                      removeColInputByIndex={removeColInputByIndex}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {/* add new col button */}
            <PrimaryButton type={"submit"} text="+ Add New Column" />
            {/* create table button */}
            <AddNewBoard data={data} setOpenBoardForm={setOpenBoardForm} />
            {/* <button type="button" onClick={() => addNewBoard(data)}>
              add Board
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewBoard;
