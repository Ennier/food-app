export default function MealItem({id, imgSrc, name, price, description}) {

    return (
        <li>
            <article className="meal-item">
                <img src={imgSrc} alt={name}/>
                <h3>{name}</h3>
                <h1 className="meal-item-price">{price}$</h1>
                <div className="meal-item-description">
                    <p>{description}</p>
                </div>
                <div className="meal-item-actions">
                    <button
                        type="button"
                        className="button"
                    >
                            Add to Cart
                    </button>
                </div>
            </article>
        </li>
    )
}