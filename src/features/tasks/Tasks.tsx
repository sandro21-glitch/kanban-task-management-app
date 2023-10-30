// import { useTasksContext } from "../context/TasksContext";

import SingleTaskPage from "./SingleTaskPage";

type Sidebar = {
  isSidebarOpen: boolean;
};
const Tasks = ({ isSidebarOpen }: Sidebar) => {

  return (
    <article
      className={`bg-boardColor ${
        isSidebarOpen ? "ml-[261px]" : "ml-[0px]"
      } py-[104px] px-5 h-screen`}
    >
      <SingleTaskPage />
    </article>
  );
};
export default Tasks;
