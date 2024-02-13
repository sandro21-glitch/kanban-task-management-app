import { useEffect } from "react";
import Modals from "./features/modals/Modals";
import Home from "./pages/Home";
import Navbar from "./ui/Navbar";
import { useAppDispatch } from "./hooks/reduxHooks";
import { fetchNewBoard } from "./features/board/boardsSlice";
import data from "./data.json";
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNewBoard(data));
  }, [dispatch]);
  return (
    <main>
      <Navbar />
      <Home />
      <Modals />
    </main>
  );
}

export default App;
