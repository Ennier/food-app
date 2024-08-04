import { useContext } from "react"
import CartContext from "../context/CartContext"
import Button from "./UI/Button";
import LogoImg from "../../public/logo.jpg"
import UserProgressContext from "../context/UserProgressContext";

export default function Header({ openCart }) {
    const { cartMeals } = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalAmount = cartMeals.reduce((sum, meal) => sum + meal.quantity, 0);

    function handleShowCart() {
        userProgressCtx.showCart();
    }

    console.log(cartMeals);

    return (
        <header id="main-header">
            <div id="title">
                <img src={LogoImg} alt="" />
                <h1>REACT FOODORDER</h1>
            </div>
            <Button
                type="button"
                classes="text-button"
                onClick={handleShowCart}
            >
                Cart {totalAmount ? `(${totalAmount})` : "(0)"}
            </Button>
        </header>
    )
}