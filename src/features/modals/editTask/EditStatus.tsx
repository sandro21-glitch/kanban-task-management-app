import { useState } from "react";

const EditStatus = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative inline-block text-left border w-full mb-5">
      <div>
        <button
          type="button"
          onClick={handleToggleMenu}
          className={`inline-flex w-full justify-start gap-x-1.5 rounded-md
              bg-white px-3 py-3 text-sm font-semibold
               text-gray-900 shadow-sm transition-all ease-in duration-150`}
          id="menu-button"
          aria-expanded={isMenuOpen}
          aria-haspopup="true"
        >
          test{" "}
          {/* {activeStatus.statusName ? activeStatus.statusName : "Select Column"} */}
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="absolute left-0 w-full z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <ul className="py-1" role="none">
            <li>test</li>
            {/* {boardTodos.map((todo, index) => (
                  <li
                    key={index}
                    onClick={() => handleSetStatus(todo.todoName, index)}
                    className={` block px-4 py-2 text-sm cursor-pointer font-semibold
                    ${
                      activeStatus.index === index
                        ? "text-mediumPurple"
                        : "text-gray-700"
                    }`}
                  >
                    {todo.todoName}
                  </li>
                ))} */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EditStatus;
