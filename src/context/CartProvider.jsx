import { useState } from "react";
import CartContext from "./CartContext";

export const CartProvider = ({children}) => {
    const [cartMeals, setCartMeals] = useState([]);

    function addToCart(meal) {
        setCartMeals((prevCartMeals) => [...prevCartMeals, meal])
    }

    function removeFromCart(mealId) {
        setCartMeals((prevCartMeals) => prevCartMeals.filter((meal) => !meal.id === mealId));
    }

    return (
        <CartContext.Provider value={{ cartMeals, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}