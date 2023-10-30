import { useState } from "react";
import Home from "./pages/Home";
import Sidebar from "./ui/Sidebar";
import Navbar from "./ui/Navbar";
import CreateNewBoard from "./features/forms/CreateNewBoard";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [openBoardForm, setOpenBoardForm] = useState<boolean>(false);
  return (
    <main>
      <Navbar />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        setOpenBoardForm={setOpenBoardForm}
      />
      <Home isSidebarOpen={isSidebarOpen} />
      <CreateNewBoard
        openBoardForm={openBoardForm}
        setOpenBoardForm={setOpenBoardForm}
      />
    </main>
  );
}

export default App;
