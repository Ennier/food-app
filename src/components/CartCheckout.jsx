import { useContext, useState } from "react";
import Button from "./UI/Button";
import Modal from "./Modal";
import CartContext from "../context/CartContext";
import UserProgressContext from "../context/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import useHttp from "../hooks/useHttp";
import Error from "../components/UI/Error"

const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

export default function CartCheckout() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        street: "",
        'postal-code': "",
        city: ""
    });
    const { cartMeals, clearCart } = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const {
        data,
        isLoading: isSending,
        error,
        sendRequest,
        clearData
    } = useHttp('http://localhost:3000/orders', requestConfig)


    const totalAmount = cartMeals.reduce((total, meal) => total + Number(meal.price * meal.quantity), 0).toFixed(2);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevOrder) => ({
            ...prevOrder,
            [name]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        //Validation check
        const { name, email, street, 'postal-code': postalCode, city } = formData;

        if (!name || !email.includes('@') || !street || !postalCode || !city) {
            return setError('Please fill all the required fields with valid data');
        }

        if (!cartMeals) {
            return setError('Please add at least one product to the Cart');
        }


        // Create Order data
        const orderData = {
            items: cartMeals.map((meal) => ({
                productId: meal.id,
                quantity: meal.quantity
            })),
            customer: formData
        }

        sendRequest(JSON.stringify({ order: orderData }));
    }

    function handleClose() {
        userProgressCtx.hideCheckout();
    }

    function handleFinishOrder() {
        userProgressCtx.hideCheckout();
        clearCart();
        clearData();
    }

    let actions = <>
        <Button
            classes="text-button"
            text="Close"
            onClick={handleClose}
        >Close</Button>
        <Button
            classes="button"
            text="Submit Order"
            onClick={handleSubmit}
        >Submit Order</Button>
    </>

    if (isSending) {
        actions = <p>Sending order data...</p>
    }

    if (data && !error) {
        return <Modal open={
            userProgressCtx.progress === 'checkout'}
            onClose={handleFinishOrder}>
            <h2>Success!</h2>
            <p>Your order was submitted successfully.</p>
            <p>You will be able to follow your order on your app soon!</p>
            <h2>Here's your order details:</h2>
            <ul>
                {cartMeals.map((meal) => (
                    <li className="cart-item" key={meal.id}>
                        <span>{meal.name} - {meal.quantity} X ${meal.price}</span>
                    </li>
                ))}
            </ul>
            <p className="modal-actions">
                <Button classes='button' onClick={handleFinishOrder}>Okay</Button>
            </p>
        </Modal>
    }

    return (
        <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(totalAmount)}</p>

                <div className="control">
                    <label htmlFor="name">Full name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        id="name"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="control">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        id="email"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="control">
                    <label htmlFor="street">Street</label>
                    <input
                        type="text"
                        name="street"
                        value={formData.street}
                        id="street"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="control-row">
                    <div className="control">
                        <label htmlFor="postal-code">Postal Code</label>
                        <input
                            type="text"
                            name="postal-code"
                            value={formData["postal-code"]}
                            id="postal-code"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="control">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            id="city"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {error && <Error title='Failed to submit order' message={error}></Error>}

                <p className="modal-actions">{actions}</p>
            </form>
        </Modal>
    )
}