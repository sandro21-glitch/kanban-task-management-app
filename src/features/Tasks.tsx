// import { useTasksContext } from "../context/TasksContext";

type Sidebar = {
  isSidebarOpen: boolean;
};
const Tasks = ({ isSidebarOpen }: Sidebar) => {
  // const { state } = useTasksContext();
  // const { allTask } = state;
  return (
    <article
      className={`bg-boardColor ${
        isSidebarOpen ? "ml-[261px]" : "ml-[0px]"
      } py-[104px] px-5 h-screen`}
    >test</article>
  );
};
export default Tasks;
