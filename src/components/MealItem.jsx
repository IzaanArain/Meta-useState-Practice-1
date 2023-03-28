import React from 'react'

const MealItem = (props) => {
  return (
    <div>
        <h1>Dish:{props.name}</h1>
        <h2>Calories: {props.calories}</h2>
    </div>
  )
}

export default MealItem