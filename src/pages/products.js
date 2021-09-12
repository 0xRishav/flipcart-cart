import useProducts from "../contexts/products";
import Product from "../components/product";

const ProductsPage = () => {
  const { products, cart, dispatch, saved } = useProducts();
  console.log(saved);

  return (
    <div>
      <div className="App">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-4 ">
          {products.map((product) => (
            <Product {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

// <button
// onClick={() => {
//   dispatch({ type: "ADD_ITEM_TO_SAVED", payload: product.id });
// }}
// >
// Save
// </button>
// <button
// onClick={() => {
//   dispatch({
//     type: "REMOVE_ITEM_FROM_SAVED",
//     payload: product.id,
//   });
// }}
// >
// Unsave
// </button>
