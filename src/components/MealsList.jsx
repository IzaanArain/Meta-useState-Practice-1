import React from 'react'
import MealItem from './MealItem'
const MealsList = (props) => {
  
    return (
    <div>
        {props.meals.map((meal)=>{
        return <MealItem
        key={meal.id} 
        name={meal.name} 
        calories={meal.calories}/>
        })}
    </div>
  )
}

export default MealsList