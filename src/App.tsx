import Modals from "./features/modals/Modals";
import Home from "./pages/Home";
import Navbar from "./ui/Navbar";

function App() {
  return (
    <main className="relative">
      <Navbar />
      <Home />
      <Modals />
    </main>
  );
}

export default App;
