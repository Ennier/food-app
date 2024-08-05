import useHttp from "../../hooks/useHttp.js";
import MealItem from "./MealItem.jsx";

const requestConfig = {};

export default function MealList() {
    const {
        data: meals,
        isLoading,
        error
    } = useHttp( 'http://localhost:3000/meals', requestConfig, []);


    if (isLoading) {
        return <p>Loading meals...</p>
    }

    /** backend error UI validation */
    if (error) {
        return <p> Error: Backend not responding. Backend error: {error}</p>
    }

    return (
        <ul id="meals">
            {meals.map((meal) => (
                <MealItem
                    key={meal.id}
                    id={meal.id}
                    imgSrc={`http://localhost:3000/${meal.image}`}
                    name={meal.name}
                    price={meal.price}
                    description={meal.description}
                />
            ))}
        </ul>
    )
}