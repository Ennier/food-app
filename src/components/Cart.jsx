import {useContext} from "react";
import CartContext from "../context/CartContext";

export default function Cart() {
    const {cartMeals, addToCart, removeFromCart} = useContext(CartContext);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <ul>
                {
                    cartMeals.map((meal) => (
                        <li className="cart-item" key={meal.id}>
                            <span>{meal.name} - {meal.quantity} X ${meal.price}</span>
                            <div className="cart-item-actions">
                                <button onClick={() => addToCart(meal)}>+</button>
                                <p>{meal.quantity}</p>
                                <button onClick={() => removeFromCart(meal.id)}>-</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div className="cart-total">
                <span>
                    Total: {cartMeals.reduce((total, meal) => total + Number(meal.price*meal.quantity), 0).toFixed(2)}
                </span>
            </div>
        </div>
    )
}