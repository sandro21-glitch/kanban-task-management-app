import SingleTaskPage from "./SingleTaskPage";

type Sidebar = {
  isSidebarOpen: boolean;
  setAddNewColumnForm: (active: boolean) => void;
};
const Tasks = ({ isSidebarOpen, setAddNewColumnForm }: Sidebar) => {
  return (
    <article
      className={`bg-boardColor ${
        isSidebarOpen ? "ml-[261px]" : "ml-[0px]"
      } py-[104px] px-5 h-screen`}
    >
      <SingleTaskPage setAddNewColumnForm={setAddNewColumnForm} />
    </article>
  );
};
export default Tasks;
