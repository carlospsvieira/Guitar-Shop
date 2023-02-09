import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";
import Guitars from "./pages/Guitars";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guitars/acoustic" element={<Guitars />} />
        <Route path="/guitars/electric" element={<Guitars />} />
        <Route path="/guitars/acoustic/:id" element={<Details />} />
        <Route path="/guitars/electric/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
