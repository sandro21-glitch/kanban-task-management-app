import { useState } from "react";
import { useAppSelector } from "../../../hooks/reduxHooks";
import EditTitle from "./EditTitle";
import EditDescription from "./EditDescription";
import EditSubtasks from "./EditSubtasks";

const EditTask = () => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const [editedTitle, setEditedTitle] = useState<string>("");
  const [editedDesc, setEditedDesc] = useState<string>("");
//   const [editedSubtasks,setEditedSubtasks] = useState<string[]>([])
  return (
    <article
      className={`min-w-[90vw] sm:min-w-[700px] ${
        darkMode ? "bg-darkMode" : "bg-white"
      } p-7 rounded-lg`}
    >
      <h3
        className={`${
          darkMode ? "text-white" : "text-black"
        } font-semibold mb-5 text-[1.3rem]`}
      >
        Edit Task
      </h3>
      <div>
        <EditTitle editedTitle={editedTitle} setEditedTitle={setEditedTitle} />
        <EditDescription
          editedDesc={editedDesc}
          setEditedDesc={setEditedDesc}
        />
        <EditSubtasks />
      </div>
    </article>
  );
};

export default EditTask;
