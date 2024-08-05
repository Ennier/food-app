import useHttp from "../../hooks/useHttp.js";
import MealItem from "./MealItem.jsx";
import Error from "../UI/Error.jsx";

const requestConfig = {};

export default function MealList() {
    const {
        data: meals,
        isLoading,
        error
    } = useHttp( 'http://localhost:3000/meals', requestConfig, []);


    if (isLoading) {
        return <p className="center">Loading meals...</p>
    }

    if (error) {
        return <Error title='Failed to fetch meals' message={error}></Error>
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