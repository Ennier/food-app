import { useContext } from "react";
import CartContext from "../context/CartContext";
import UserProgressContext from "../context/UserProgressContext";
import Button from "./UI/Button";
import Modal from "./Modal";
import { currencyFormatter } from "../util/formatting";

export default function Cart() {
    const { cartMeals, addToCart, removeFromCart } = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotalPrice = cartMeals.reduce((total, meal) => total + Number(meal.price * meal.quantity), 0).toFixed(2);

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }

    function handleGoToCheckout() {
        userProgressCtx.showCheckout();
    }

    return <Modal className="cart" open={userProgressCtx.progress === 'cart'} onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}>
        <h2>Your Cart</h2>
        <ul>
            {cartMeals.map((meal) => (
                <li className="cart-item" key={meal.id}>
                    <span>{meal.name} - {meal.quantity} X ${meal.price}</span>
                    <div className="cart-item-actions">
                        <Button
                            onClick={() => removeFromCart(meal.id)}
                        >
                            -
                        </Button>

                        <p>{meal.quantity}</p>

                        <Button
                            onClick={() => addToCart(meal)}
                        >
                            +
                        </Button>
                    </div>
                </li>
            ))}
        </ul>
        <p className="cart-total">Total: { currencyFormatter.format(cartTotalPrice) }</p>
        <p className="modal-actions">
            <Button classes='text-button' onClick={handleCloseCart}>
                Close
            </Button>
            {cartMeals.length > 0 && <Button classes='button' onClick={handleGoToCheckout}>Go to Summary</Button>}
        </p>
    </Modal>
}