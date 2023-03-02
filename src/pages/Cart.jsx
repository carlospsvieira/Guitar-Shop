import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/AddProvider";
import { guitars } from "../data";
import { BsCartX } from "react-icons/bs";

function Cart() {
  const { cart, setCart, user } = useContext(Context);
  const [empty, setEmpty] = useState(false);
  const navigate = useNavigate();
  const newList = guitars.filter((guitar) =>
    cart?.map((id) => id).includes(guitar.id)
  );
  const pricing = newList.map((guitar) => guitar.price);

  const handleCart = () => {
    const storage = JSON.parse(localStorage.getItem("cart"));

    if (!storage || storage.length === 0) {
      setEmpty(true);
    } else {
      setCart(storage);
    }
    return;
  };

  const handleRemoveItem = (productId) => {
    const storage = JSON.parse(localStorage.getItem("cart"));
    const removeList = storage?.filter((id) => id !== productId);

    localStorage.setItem("cart", JSON.stringify(removeList));
    setCart(removeList);

    return cart.length === 1 ? setEmpty(true) : setEmpty(false);
  };

  const redirectCheckout = () => {
    user && user.email.length > 0 ? navigate("/checkout") : navigate("/login");
  };

  useEffect(() => {
    handleCart();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl lg:text-4xl text-center mt-[5rem]">
        Your Shopping Cart
      </h1>
      <div className="flex flex-wrap justify-center items-end gap-8 px-4">
        <div className="flex flex-col h-[400px] justify-center rounded-md cart-list">
          {empty ? (
            <div className="flex flex-col w-[400px] h-[500px] justify-end">
              <p className="text-2xl text-center mb-[7rem]">
                Your cart is empty.
              </p>
              <Link
                to="/"
                className="bg-amber-600 text-white text-center py-2 rounded-sm"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            newList.map((guitar) => (
              <div
                key={guitar.id}
                className="flex max-w-[500px] h-[100px] items-end justify-between p-4 gap-12 shadow-md"
              >
                <div>
                  <img src={guitar.image} alt="" className="w-[70px]" />
                </div>
                <div className="flex flex-col gap-1 w-[150px] items-start">
                  <span>{guitar.name}</span>
                  <button onClick={() => handleRemoveItem(guitar.id)}>
                    <BsCartX size={20} className="text-red-700" />
                  </button>
                </div>
                <span className="text-zinc-600">{`$${guitar.price}`}</span>
              </div>
            ))
          )}
        </div>
        <div className="flex flex-col w-[400px] h-[300px] justify-end">
          <h2 className="text-2xl text-amber-600 text-center mb-[5rem]">
            Thank you for buying from us!
          </h2>
          <p className="text-2xl text-zinc-700 font-bold text-center">
            Total $
            {pricing
              .reduce((acc, price) => {
                const total = acc + price;
                return total;
              }, 0)
              .toFixed(2)}
          </p>
          <button
            onClick={redirectCheckout}
            className="bg-black text-white py-2 rounded-sm"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
