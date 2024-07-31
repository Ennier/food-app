import {useContext} from "react"
import CartContext from "../context/CartContext"

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
            <button
                type="button"
                className="text-button"
                onClick={openCart}>
                Cart ({amount})
            </button>
        </header>
    )
}