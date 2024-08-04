import { CartProvider } from "./context/CartContextProvider.jsx";
import Header from "./components/Header.jsx";
import MealList from "./components/Meals/MealList.jsx";
import Cart from "./components/Cart.jsx";
import {UserProgressContextProvider} from "./context/UserProgressContext.jsx";

function App() {

  return (
    <UserProgressContextProvider>
      <CartProvider>
        <Header />
        <MealList />
        <Cart></Cart>
      </CartProvider>
    </UserProgressContextProvider>
  );
}

export default App;
