import Header from "./components/Header.jsx";
import MealList from "./components/Meals/MealList.jsx";
import Cart from "./components/Cart.jsx";
import { CartProvider } from "./context/CartContextProvider.jsx";
import {UserProgressContextProvider} from "./context/UserProgressContext.jsx";
import CartCheckout from "./components/CartCheckout.jsx";

function App() {

  return (
    <UserProgressContextProvider>
      <CartProvider>
        <Header />
        <MealList />
        <Cart></Cart>
        <CartCheckout></CartCheckout>
      </CartProvider>
    </UserProgressContextProvider>
  );
}

export default App;
