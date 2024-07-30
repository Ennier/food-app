import Header from "./components/Header.jsx";
import MealList from "./components/MealList.jsx";
import { CartProvider } from "./context/CartProvider.jsx";
import {useState} from "react";
import Modal from "./components/Modal.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  const [showCart, setShowCart] = useState(false);

  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  return (
    <CartProvider>
      <Header openCart={openCart}/>
      <MealList />
        <Modal show={showCart} onClose={closeCart} actionText="Submit Order">
          <Cart />
        </Modal>
    </CartProvider>
  );
}

export default App;
