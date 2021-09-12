import React, { createContext, useReducer } from "react";
import { useContext } from "react";
import Products from "../products.json";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const initialState = {
    products: [...Products.products],
    cart: [],
    saved: [],
  };

  const ProductsReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM_TO_CART":
        const cartIndex = state.cart.findIndex(
          (product) => product.id === action.payload
        );
        const productIndex = state.products.findIndex(
          (product) => product.id === action.payload
        );
        if (cartIndex === -1) {
          return {
            ...state,
            cart: [
              ...state.cart,
              { product: state.products[productIndex], quantity: 1 },
            ],
          };
        }

      case "REMOVE_ITEM_FROM_CART":
        const removeCartIndex = state.cart.findIndex(
          (cartIitem) => cartIitem.product.id === action.payload
        );
        if (removeCartIndex !== -1) {
          let newCart = [...state.cart];
          let filteredCart = newCart.filter(
            (cartItem) => cartItem.product.id !== action.payload
          );
          return {
            ...state,
            cart: [...filteredCart],
          };
        }

      case "ADD_ITEM_TO_SAVED":
        const saveIndex = state.saved.findIndex(
          (product) => product.id === action.payload
        );
        const saveProductIndex = state.products.findIndex(
          (product) => product.id === action.payload
        );
        console.log(saveProductIndex, saveIndex);
        if (saveIndex === -1) {
          return {
            ...state,
            saved: [...state.saved, state.products[saveProductIndex]],
          };
        }

      case "REMOVE_ITEM_FROM_SAVED":
        const removeSavedItem = state.saved.findIndex(
          (savedIitem) => savedIitem.id === action.payload
        );
        if (removeSavedItem !== -1) {
          let newSavedList = [...state.saved];
          let filteredSavedList = newSavedList.filter(
            (savedItem) => savedItem.id !== action.payload
          );
          return {
            ...state,
            saved: [...filteredSavedList],
          };
        }

      case "INCREASE_QUANTITY":
        return {
          ...state,
          cart: state.cart.map((cartItem) =>
            cartItem.product.id === action.payload
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };

      case "DECREASE_QUANTITY":
        return {
          ...state,
          cart: state.cart.map((cartItem) =>
            cartItem.product.id === action.payload
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          ),
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  return (
    <ProductsContext.Provider value={{ products: { ...state, dispatch } }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default function useProducts() {
  return useContext(ProductsContext).products;
}
