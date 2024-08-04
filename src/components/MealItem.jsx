import { useContext } from "react"
import CartContext from "../context/CartContext"
import Button from "./UI/Button.jsx";
import { currencyFormatter } from "../util/formatting.js"

export default function MealItem({ id, name, imgSrc, price, description }) {
    const { addToCart } = useContext(CartContext);

    return (
        <li>
            <article className="meal-item">
                <img src={imgSrc} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <h1 className="meal-item-price">{currencyFormatter.format(price)}</h1>
                    <p className="meal-item-description">{description}</p>
                </div>
                <div className="meal-item-actions">
                    <Button
                        text="Add to Cart"
                        type="button"
                        classes="button"
                        action={() => addToCart({
                            id,
                            name,
                            price,
                            description,
                            imgSrc
                        })}
                    />
                </div>
            </article>
        </li>
    )
}