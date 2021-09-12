import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductsPage from "./pages/products";
import CartPage from "./pages/cart";

function App() {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex items-center justify-between my-6">
        <Link to="/">Home</Link>
        <Link to="/cart">
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
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </Link>
      </div>
      <Switch>
        <Route exact path="/" component={ProductsPage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </div>
  );
}

export default App;
