import Tasks from "../features/tasks/Tasks";
type Sidebar = {
  isSidebarOpen: boolean;
  setAddNewColumnForm: (active: boolean) => void;
};
const Home = ({ isSidebarOpen, setAddNewColumnForm }: Sidebar) => {
  return (
    <section className=" w-full">
      <Tasks isSidebarOpen={isSidebarOpen} setAddNewColumnForm={setAddNewColumnForm} />
    </section>
  );
};
export default Home;
