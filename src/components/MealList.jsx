import MealItem from "./MealItem.jsx";
import {useEffect, useState} from "react";

export default function MealList() {
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const res = await fetch('http://localhost:3000/meals');
                if (!res.ok){
                    throw new Error('Backend service is not responding');
                }
                const data = await res.json();
                setMeals(data)
            } catch (error) {
                setError(error.message);
            }
        };
        
        fetchMeals();
    }, []);
    
    if (error){
        return <p> Error: Backend not responding</p>
    }
    
    console.log(meals);
    
    function handleAddMeals() {
        
    }
    
    return (
        <ul id="meals">
            {meals.map((meal) => (
                <MealItem
                    key={meal.id}
                    imgSrc={`http://localhost:3000/${meal.image}`} 
                    name={meal.name}
                    price={meal.price}
                    description={meal.description}
                />
            ))}
        </ul>
    )
}