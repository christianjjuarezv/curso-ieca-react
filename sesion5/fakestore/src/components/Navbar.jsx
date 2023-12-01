import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext"

const Navbar = () => {
  const { state: {cart}} = useCartContext();
  const [totalProducts, setTotalProducts] = useState(0);
  useEffect(()=>{
    setTotalProducts(cart.length);
  }, [cart])
  return (
    <nav className="bg-black p-4 w-full flex justify-center">
      <div className="container flex justify-between items-center text-white px-4">
        <h1 className="text-xl">FakeStore</h1>
        <h1>Productos agregados al carrito: {totalProducts}</h1>
        <Link to="/cart">Carrito</Link>
      </div>
    </nav>
  );
};

export default Navbar;
