import {useContext} from "react";
import CartContext from "../context/CartContext";

export default function Form() {
    const {cartMeals} = useContext(CartContext);
    const totalAmount = cartMeals.reduce((total, meal) => total + Number(meal.price*meal.quantity), 0).toFixed(2);

    return (
        <form>
            <h1>Checkout</h1>
            <p>Total Amount: {totalAmount}</p>

            <div className="control">
                <label for="name">Full name</label>
                <input type="text" name="name" id="name" />
            </div>

            <div className="control">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>

            <div className="control">
                <label for="street">Street</label>
                <input type="text" name="street" id="street" />
            </div>

            <div className="control-row">
                <label for="">Postal Code</label>
                <input type="text" name="postal-code" id="postal-code" />

                <label for="">City</label>
                <input type="text" name="city" id="city" />
            </div>
        </form>
    )
}