import Board from "../features/board/Board";
import Sidebar from "../features/sidebar/Sidebar";

const Home = () => {
  return (
    <section className="flex w-full min-h-full relative overflow-y-hidden">
      <Sidebar />
      <Board />
    </section>
  );
};

export default Home;
