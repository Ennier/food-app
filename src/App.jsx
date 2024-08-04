import {useState} from "react";
import { CartProvider } from "./context/CartContextProvider.jsx";
import Header from "./components/Header.jsx";
import MealList from "./components/Meals/MealList.jsx";
import Modal from "./components/Modal.jsx";
import Cart from "./components/Cart.jsx";
import Form from "./components/OrderForm.jsx";

function App() {


  return (
    <CartProvider>
      <Header />

      <MealList />

    </CartProvider>
  );
}

export default App;
