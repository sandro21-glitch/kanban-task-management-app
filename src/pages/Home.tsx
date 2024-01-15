import Board from "../features/board/Board";
import Sidebar from "../ui/Sidebar";

const Home = () => {
  return (
    <section className="flex w-full min-h-full relative overflow-hidden">
      <Sidebar />
      <Board />
    </section>
  );
};

export default Home;
