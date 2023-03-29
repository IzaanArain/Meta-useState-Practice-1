import { useState } from 'react'
import Heading from './components/Heading'
import MealCounter from './components/MealCounter'
import MealsList from './components/MealsList'

function App() {
  const [word, setWord] = useState("Eat")
  
  const clickHandler=()=>{
    setWord("Drink")
  }
  const clickHandler2=()=>{
    setWord("Eat")
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
      <button onClick={clickHandler2}>Click</button>
      <MealsList meals={meals}/>
      <MealCounter meals={meals}/>
    </div>
  )
}

export default App
