import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";
import Guitars from "./pages/Guitars";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="acoustic" element={<Guitars />} />
        <Route path="electric" element={<Guitars />} />
        <Route path="acoustic/:id" element={<Details />} />
        <Route path="electric/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
