import { useState } from "react";
import Home from "./pages/Home";
import Sidebar from "./ui/Sidebar";
import Navbar from "./ui/Navbar";
import CreateNewBoard from "./features/forms/CreateNewBoard";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  return (
    <main className="flex">
      <Navbar />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Home isSidebarOpen={isSidebarOpen} />
      <CreateNewBoard />
    </main>
  );
}

export default App;
