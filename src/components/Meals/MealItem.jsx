import { useContext, useEffect, useRef, useState } from "react"
import CartContext from "../../context/CartContext.js"
import Button from "../UI/Button.jsx";
import { currencyFormatter } from "../../util/formatting.js"
import { originStamp, stampRotation, ticketNumber } from "../../util/originStamp.js"

export default function MealItem({ id, name, imgSrc, price, description }) {
    const { addToCart } = useContext(CartContext);
    const [justAdded, setJustAdded] = useState(false);
    const resetTimeout = useRef(null);

    useEffect(() => () => clearTimeout(resetTimeout.current), []);

    function handleAddToCart() {
        addToCart({ id, name, price, description, imgSrc });
        setJustAdded(true);
        clearTimeout(resetTimeout.current);
        resetTimeout.current = setTimeout(() => setJustAdded(false), 900);
    }

    return (
        <li>
            <article className="meal-item">
                <div className="meal-item-stub">
                    <span className="ticket-number">{ticketNumber(id)}</span>
                    <span
                        className="origin-stamp"
                        style={{ '--stamp-rotation': `${stampRotation(id)}deg` }}
                    >
                        {originStamp(name)}
                    </span>
                </div>
                <img src={imgSrc} alt={name} />
                <div className="meal-item-body">
                    <h3>{name}</h3>
                    <p className="meal-item-description">{description}</p>
                    <p className="meal-item-price">
                        <span className="price-leader" aria-hidden="true"></span>
                        <span>{currencyFormatter.format(price)}</span>
                    </p>
                </div>
                <div className="meal-item-actions">
                    <Button
                        text={justAdded ? "Added ✓" : "Add to Order"}
                        type="button"
                        classes={`button${justAdded ? " button-stamped" : ""}`}
                        action={handleAddToCart}
                    />
                </div>
            </article>
        </li>
    )
}
