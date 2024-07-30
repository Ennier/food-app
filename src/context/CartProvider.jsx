import {useState} from "react";
import CartContext from "./CartContext";

export const CartProvider = ({children}) => {
    const [cartMeals, setCartMeals] = useState([]);

    function addToCart(meal) {
        setCartMeals((prevCartMeals) => {
            const existingMealId = prevCartMeals.findIndex((m) => m.id === meal.id);

            if (existingMealId !== -1) {
                const updatedCartMeals = [...prevCartMeals];
                const currentMeal = updatedCartMeals[existingMealId];

                updatedCartMeals[existingMealId] = {
                    ...currentMeal,
                    quantity: currentMeal.quantity + 1
                }
                return updatedCartMeals;
            } else {
                return [...prevCartMeals, {...meal, quantity: 1}];
            }
        });
    }

    function removeFromCart(mealId) {
        setCartMeals((prevCartMeals) => {
            const existingMealId = prevCartMeals.findIndex((m) => m.id === mealId);

            if (existingMealId !== -1) {
                const updatedCartMeals = [...prevCartMeals];
                const currentMeal = updatedCartMeals[existingMealId];

                if (currentMeal.quantity !== 1) {
                    updatedCartMeals[existingMealId] = {
                        ...currentMeal,
                        quantity: currentMeal.quantity - 1
                    }
                    return updatedCartMeals;
                } else {
                    return prevCartMeals.filter((meal) => !meal.id === mealId)
                }
            }
        });
    }

    return (
        <CartContext.Provider value={{cartMeals, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}