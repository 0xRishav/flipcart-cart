import useProducts from "../contexts/products";

const CartProduct = ({
  product: { name, price, img, id, size, category },
  quantity,
}) => {
  const { products, cart, saved, dispatch } = useProducts();
  console.log("🚀 ~ file: CartProduct.js ~ line 8 ~ saved", saved);
  const cartButtonHandlere = (id) => {
    dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: id });
  };
  const increaseQUantityHandler = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };
  const decreaseQUantityHandler = (id, quantity) => {
    if (quantity < 2) {
      return;
    }
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };
  const handleSave = (id) => {
    dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: id });
    dispatch({ type: "ADD_ITEM_TO_SAVED", payload: id });
  };
  return (
    <div className="flex justify-start items-start my-4" key={id}>
      <div className="flex flex-col justify-center items-center">
        <img src={img} alt="product-pic" className="w-32 h-44 object-cover" />
        <div className="mt-4">
          <button
            className="border-2 rounded-full border-gray-400 px-2"
            onClick={() => decreaseQUantityHandler(id, quantity)}
          >
            -
          </button>
          <button className="border-2 border-gray-400 px-4 mx-4">
            {quantity}
          </button>
          <button
            className="border-2 rounded-full border-gray-400 px-2"
            onClick={() => increaseQUantityHandler(id)}
          >
            +
          </button>
        </div>
      </div>
      <div className="ml-8 mt-4">
        <div>{name}</div>
        <div>Size: {size}</div>
        <div>Category: {category}</div>
        <div>
          <button
            onClick={() => cartButtonHandlere(id)}
            className="text-xl font-semibold text-black"
          >
            Ramove From Cart
          </button>
          <button
            onClick={() => handleSave(id)}
            className="text-xl ml-6 font-semibold text-black"
          >
            Save For Later
          </button>
        </div>
      </div>

      {/* <div className="w-full bg-gray-300 h-1 mt-2" /> */}
    </div>
  );
};

export default CartProduct;
