import { useContext } from "react"
import CartContext from "../context/CartContext"

export default function MealItem({ id, imgSrc, name, price, description }) {
    const {addToCart} = useContext(CartContext);

    return (
        <li>
            <article className="meal-item">
                <img src={imgSrc} alt={name} />
                <h3>{name}</h3>
                <h1 className="meal-item-price">${price}</h1>
                <div className="meal-item-description">
                    <p>{description}</p>
                </div>
                <div className="meal-item-actions">
                    <button
                        type="button"
                        className="button"
                        onClick={() => addToCart({
                            id,
                            name,
                            price,
                            description,
                            imgSrc
                        })}
                    >
                        Add to Cart
                    </button>
                </div>
            </article>
        </li>
    )
}