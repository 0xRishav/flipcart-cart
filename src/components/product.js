import React, { useEffect, useState } from "react";
import useProducts from "../contexts/products";
import { Link } from "react-router-dom";

const Product = ({ id, name, img, price }) => {
  const { products, cart, dispatch, saved } = useProducts();
  const [isInCart, setisInCart] = useState(false);
  const cartButtonHandlere = (id) => {
    dispatch({ type: "ADD_ITEM_TO_CART", payload: id });
  };
  useEffect(() => {
    const index = cart.findIndex((cartIitem) => cartIitem.product.id === id);
    index === -1 ? setisInCart(false) : setisInCart(true);
  }, [cart]);
  return (
    <div key={id}>
      <img className="w-full h-96 object-cover" src={img} alt="product-pic" />
      <div className="text-lg font-medium my-2">{name}</div>
      <div className="text-base font-medium my-2">Rs. {price}</div>
      {isInCart ? (
        <Link to="/cart" className="">
          <button className="bg-yellow-500 w-full py-4 mt-4 flex items-center justify-around">
            <div className="text-sm font-medium my-2">Go To Cart</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </Link>
      ) : (
        <button
          className="bg-yellow-500 w-full py-6 text-sm font-medium my-2"
          onClick={() => cartButtonHandlere(id)}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default Product;
