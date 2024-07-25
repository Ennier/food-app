import { useContext } from "react"
import CartContext from "../context/CartContext"

export default function Header() {
    const {cartMeals} = useContext(CartContext);

    const amount = cartMeals.length;

    console.log(cartMeals);

    return (
        <header id="main-header">
            <h1 id="title">
                <img src="../../public/logo.jpg" alt=""/>
                REACT FOODORDER
            </h1>
            <button type="button" className="text-button">Cart ({amount})</button>
        </header>
    )
}