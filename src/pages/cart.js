import CartProduct from "../components/CartProduct";
import useProducts from "../contexts/products";
import { useEffect, useState } from "react";
import SavedProduct from "../components/SavedProduct";

const CartPage = () => {
  const { products, cart, dispatch, saved } = useProducts();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      cart.reduce(
        (acc = 0, cartItem) => cartItem.product.price * cartItem.quantity,
        0
      )
    );
  }, [cart]);

  return (
    <div>
      <div className="flex justify-between items-start">
        <div className="w-3/4 bg-white ">
          <div className=" bg-white ">
            <div className="text-base font-semibold text-left">
              My Cart ({cart.length})
            </div>
            <div className="w-full bg-gray-300 h-1 mt-2" />

            {cart.map((cartItem) => (
              <CartProduct {...cartItem} />
            ))}
          </div>
          <div className=" bg-white ">
            <div className="text-base font-semibold text-left">
              Saved Products ({saved.length})
            </div>
            <div className="w-full bg-gray-300 h-1 mt-2" />

            {saved.map((savedItem) => (
              <SavedProduct {...savedItem} />
            ))}
          </div>
        </div>

        <div className="bg-white w-4/12 mt-2">
          <div className="text-black-500">PRICE DETAILS</div>
          <div className="w-full bg-gray-300 h-1" />
          <div className="flex items-center justify-between">
            <div className="text-black">Price({cart.length} Items)</div>
            <div className="text-black">{Math.round(totalPrice)}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-black">Discount</div>
            <div className="text-green-500">{Math.round(totalPrice * 0.3)}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-black">Delivery</div>
            <div className="text-green-500">Free</div>
          </div>
          <div className="w-full bg-gray-300 h-1" />
          <div className="flex items-center justify-between">
            <div className="text-black text-lg font-semibold">Total Amount</div>
            <div className="text-black text-lg font-semibold">
              {Math.round(totalPrice * 0.7)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
