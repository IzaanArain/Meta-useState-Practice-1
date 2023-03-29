import React from 'react'

const MealCounter = (props) => {
  return (
    <div>
        <h1>Number of meals: {props.meals.length}</h1>
    </div>
  )
}

export default MealCounter