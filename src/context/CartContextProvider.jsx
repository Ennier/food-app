import { useState } from "react";
import CartContext from "./CartContext";

export const CartProvider = ({ children }) => {
    const [cartMeals, setCartMeals] = useState([]);

    function addToCart(meal) {
        setCartMeals((prevCartMeals) => {
            const existingMealIndex = prevCartMeals.findIndex(m => m.id === meal.id);

            if (existingMealIndex !== -1) {
                const updatedCartMeals = [...prevCartMeals];
                const currentMeal = updatedCartMeals[existingMealIndex];

                updatedCartMeals[existingMealIndex] = {
                    ...currentMeal,
                    quantity: currentMeal.quantity + 1
                }
                return updatedCartMeals;
            } else {
                return [...prevCartMeals, { ...meal, quantity: 1 }];
            }
        });
    }

    function removeFromCart(mealId) {
        setCartMeals(prevCartMeals => {
            const existingMealIndex = prevCartMeals.findIndex(meal => meal.id === mealId);
            if (existingMealIndex === -1) return prevCartMeals; // Item not found

            const updatedCartMeals = [...prevCartMeals];
            if (updatedCartMeals[existingMealIndex].quantity > 1) {
                updatedCartMeals[existingMealIndex] = {
                    ...updatedCartMeals[existingMealIndex],
                    quantity: updatedCartMeals[existingMealIndex].quantity - 1
                };
            } else {
                updatedCartMeals.splice(existingMealIndex, 1); // Remove item if quantity is 1 or less
            }

            return updatedCartMeals;
        });
    }

    function clearCart() {
        return setCartMeals([]);
    }

    return (
        <CartContext.Provider value={{ cartMeals, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}