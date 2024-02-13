import Board from "../features/board/Board";
import Sidebar from "../features/sidebar/Sidebar";

const Home = () => {
  return (
    <section className="flex w-full absolute bottom-0 top-[1rem] left-0 sm:top-14">
      <Sidebar />
      <Board />
    </section>
  );
};

export default Home;
