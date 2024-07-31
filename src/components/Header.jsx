import {useContext} from "react"
import CartContext from "../context/CartContext"
import Button from "./Button";

export default function Header({ openCart }) {
    const {cartMeals} = useContext(CartContext);

    const amount = cartMeals.length;

    console.log(cartMeals);

    return (
        <header id="main-header">
            <div id="title">
                <h1 id="title">
                    <img src="../../public/logo.jpg" alt=""/>
                    REACT FOODORDER
                </h1>
            </div>
            <Button
                text="Cart"
                type="button"
                classes="text-button"
                action={openCart}
                amount={amount}
            />
        </header>
    )
}