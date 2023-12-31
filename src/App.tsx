import { useState } from "react";
import Home from "./pages/Home";
import Sidebar from "./ui/Sidebar";
import Navbar from "./ui/Navbar";
import CreateNewBoard from "./features/forms/CreateNewBoard";
import EditBoard from "./features/tasks/EditBoard";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [openBoardForm, setOpenBoardForm] = useState<boolean>(false);
  const [addNewColumnForm, setAddNewColumnForm] = useState(false);
  return (
    <main>
      <Navbar />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        setOpenBoardForm={setOpenBoardForm}
      />
      <Home
        isSidebarOpen={isSidebarOpen}
        setAddNewColumnForm={setAddNewColumnForm}
      />
      <CreateNewBoard
        openBoardForm={openBoardForm}
        setOpenBoardForm={setOpenBoardForm}
      />
      <EditBoard addNewColumnForm={addNewColumnForm} />
    </main>
  );
}

export default App;
