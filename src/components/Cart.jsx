import { useContext } from "react";
import CartContext from "../context/CartContext";
import Button from "./UI/Button";
import { currencyFormatter } from "../util/formatting";

export default function Cart() {
    const { cartMeals, addToCart, removeFromCart, clearCart } = useContext(CartContext);

    const total = cartMeals.reduce((sum, meal) => sum + Number(meal.price * meal.quantity), 0);

    return (
        <div className="cart">
            <div className="cart-header">
                <h2>Your Order</h2>
                {cartMeals.length > 0 && (
                    <Button
                        classes="text-button void-order-button"
                        action={clearCart}
                        text="Void Order"
                    />
                )}
            </div>

            {cartMeals.length === 0 && (
                <p className="cart-empty">Nothing on the ticket yet — add a dish to get started.</p>
            )}

            {cartMeals.length > 0 && (
                <>
                    <ul>
                        {cartMeals.map((meal) => (
                            <li className="cart-item" key={meal.id}>
                                <div className="cart-item-actions">
                                    <Button
                                        classes="text-button cart-qty-button"
                                        action={() => removeFromCart(meal.id)}
                                        text="-"
                                    />
                                    <p>{meal.quantity}</p>
                                    <Button
                                        classes="text-button cart-qty-button"
                                        action={() => addToCart(meal)}
                                        text="+"
                                    />
                                </div>
                                <span className="cart-item-name">{meal.name}</span>
                                <span className="price-leader" aria-hidden="true"></span>
                                <span className="cart-item-price">
                                    {currencyFormatter.format(meal.price * meal.quantity)}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-total">
                        <span>Total</span>
                        <span className="price-leader" aria-hidden="true"></span>
                        <span>{currencyFormatter.format(total)}</span>
                    </div>
                </>
            )}
        </div>
    )
}
