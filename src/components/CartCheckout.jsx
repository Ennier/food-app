import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import Button from "./UI/Button";
import Modal from "./Modal";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import UserProgressContext from "../context/UserProgressContext";

export default function CartCheckout() {
    const { cartMeals } = useContext(CartContext);
    const totalAmount = cartMeals.reduce((total, meal) => total + Number(meal.price * meal.quantity), 0).toFixed(2);
    const userProgressCtx = useContext(UserProgressContext);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        street: "",
        'postal-code': "",
        city: ""
    });

    const [error, setError] = useState(null);
    const [success, setSucces] = useState(null);

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

        try {
                const response = fetch('http://localhost:3000/orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ order: orderData })
                })

                if (response.ok) {
                    setSucces('Order placed succesfully');
                    setFormData({
                        name: "",
                        email: "",
                        street: "",
                        'postal-code': "",
                        city: ""
                    })
                    setError(null);
                    console.log("200: request succesful")
                } else {
                    const data = await response.json();
                    setError(data.message || 'An error ocurred');
                }
        } catch (error) {
            setError('An error ocurred ' + error.message);
        }
    }

    function handleClose() {
        userProgressCtx.hideCheckout();
    }

    return (
        <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount: { currencyFormatter.format(totalAmount) }</p>

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
                <p className="modal-actions">
                    <Button
                        classes="text-button"
                        text="Close"
                        onClick={handleClose}
                    >Close</Button>
                    <Button
                        type="submit"
                        classes="button"
                        text="Submit Order"
                        onClick={handleSubmit}
                    >Submit Order</Button>
                </p>
            </form>
        </Modal>
    )
}