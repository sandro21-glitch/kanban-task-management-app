import Board from "../features/board/Board";
import Sidebar from "../features/sidebar/Sidebar";

const Home = () => {
  return (
    <section className="flex w-full min-h-full relative">
      <Sidebar />
      <Board />
    </section>
  );
};

export default Home;
