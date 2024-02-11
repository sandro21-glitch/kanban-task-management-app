import Board from "../features/board/Board";
import Sidebar from "../features/sidebar/Sidebar";
// (min-width: 640px)
const Home = () => {
  const minHeight =
    window.innerWidth < 640 ? "100vh" : `calc(100vh - ${6.0625 * 16}px)`;
  return (
    <section
      style={{ minHeight }}
      className="flex w-full relative sm:min-h-screen"
    >
      <Sidebar />
      <Board />
    </section>
  );
};

export default Home;
