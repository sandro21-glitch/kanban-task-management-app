import Tasks from "../features/Tasks";
type Sidebar = {
  isSidebarOpen: boolean;
};
const Home = ({ isSidebarOpen }: Sidebar) => {
  return (
    <section className=" w-full">
      <Tasks isSidebarOpen={isSidebarOpen} />
    </section>
  );
};
export default Home;
