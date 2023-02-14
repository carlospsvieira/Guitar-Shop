import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";
import Guitars from "./pages/Guitars";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";

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
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
