import Header from "./components/Header.jsx";
import MealList from "./components/MealList.jsx";
import { CartProvider } from "./context/CartContext.jsx";

function App() {
  return (
    <CartProvider>
      <Header />
      <MealList />
    </CartProvider>
  );
}

export default App;
