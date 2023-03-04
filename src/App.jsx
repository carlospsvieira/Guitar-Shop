import { Routes, Route } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AutoTop from "./components/AutoTop";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";
import Guitars from "./pages/Guitars";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <AutoTop />
        <ScrollToTop className="px-[5px]" />
        <ToastContainer limit={1} />
        <Routes>
          <Route path="/guitar-shop" element={<Home />} />
          <Route path="/guitar-shop/acoustic" element={<Guitars />} />
          <Route path="/guitar-shop/electric" element={<Guitars />} />
          <Route path="/guitar-shop/acoustic/:id" element={<Details />} />
          <Route path="/guitar-shop/electric/:id" element={<Details />} />
          <Route path="/guitar-shop/cart" element={<Cart />} />
          <Route path="/guitar-shop/checkout" element={<Checkout />} />
          <Route path="/guitar-shop/login" element={<Login />} />
          <Route path="/guitar-shop/register" element={<Register />} />
          <Route path="/guitar-shop/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
