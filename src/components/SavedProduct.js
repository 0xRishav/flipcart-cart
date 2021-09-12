import useProducts from "../contexts/products";

const SavedProduct = ({ name, price, img, id, size, category }) => {
  const { products, cart, saved, dispatch } = useProducts();
  const cartButtonHandlere = (id) => {
    dispatch({ type: "REMOVE_ITEM_FROM_SAVED", payload: id });
    dispatch({ type: "ADD_ITEM_TO_CART", payload: id });
  };
  return (
    <div className="flex justify-start items-start my-4" key={id}>
      <div className="flex flex-col justify-center items-center">
        <img src={img} alt="product-pic" className="w-32 h-44 object-cover" />
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
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedProduct;
