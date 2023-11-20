import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Sidebars from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-black to-white">
       <Sidebars/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
