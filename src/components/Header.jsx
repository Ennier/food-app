import { useContext } from "react"
import CartContext from "../context/CartContext"
import Button from "./UI/Button";
import LogoImg from "../../public/logo.jpg"
export default function Header({ openCart }) {
    const { cartMeals } = useContext(CartContext);

    const totalAmount = cartMeals.reduce((sum, meal) => sum + meal.quantity, 0);

    console.log(cartMeals);

    return (
        <header id="main-header">
            <div id="title">
                <img src={LogoImg} alt="" />
                <h1>REACT FOODORDER</h1>
            </div>
            <Button
                text="Cart"
                type="button"
                classes="text-button"
                action={openCart}
                amount={totalAmount}
            />
        </header>
    )
}