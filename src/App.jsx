import { useState } from 'react'
import Heading from './components/Heading'
import MealCounter from './components/MealCounter'
import MealsList from './components/MealsList'

function App() {
  const [word, setWord] = useState("Eat")
  const clickHandler=()=>{
    setWord("Drink")
  }

  const todaysMeals=[
    {name:"Baked Beans",calories:200,id:1},
    {name:"Grilled Veggies",calories:80,id:2},
    {name:"Soup",calories:100,id:3},
  ]

  const [meals,setMeals]=useState(todaysMeals)

  return (
    <div>
      <Heading message={word+" at little lemon"}/>
      <button onClick={clickHandler}>Click</button>
      <MealsList meals={meals}/>
      <MealCounter/>
    </div>
  )
}

export default App
