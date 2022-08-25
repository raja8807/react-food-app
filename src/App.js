import logo from './logo.svg';
import './App.css';
import Food from './components/Food'
import AddFood from './components/addFood';

import { useState } from 'react';

import biriyani from "./components/images/biriyani.jpg"
import burger from "./components/images/burger.jpg"
import dosa from "./components/images/dosa.jpg"
import chicken from "./components/images/chicken.jpg"


function App() {

  const foods = [
    {
      name: "Paradise Biriyani",
      catagory: "biriyani",
      price: 250,
      offer: 50,
      img: biriyani
    },
    {
      name: "Chicken 65",
      catagory: "chicken",
      price: 90,
      offer: 20,
      img: chicken
    },
    {
      name: "Dosa",
      catagory: "veg",
      price: 45,
      offer: 17,
      img: dosa
    },
    {
      name: "Chicken Burger",
      catagory: "burger",
      price: 250,
      offer: 50,
      img: burger
    }
  ]

  const [foodList, setFoodList] = useState(foods)

  const [showFoodBox, setShowFoodBox] = useState("")


  const toogleAddFoodVis = () => {
    // console.log(addFoodVis);
    // if(addFoodVis === "scaleY(0)"){
    //   setAddFoodVis("scaleY(1)")
    //   console.log(foodList);
    // }else{
    //   setAddFoodVis("scaleY(0)")
    // }
    if (showFoodBox == "") {
      setShowFoodBox(<AddFood add={add}></AddFood>)

    } else {
      setShowFoodBox("")

    }
  }

  const add = (food) => {
    food.img = burger;
    setFoodList([...foodList, food])
    // console.log(foodList);
  }


  return (
    <div className="App">
      <header className='header'>
        <div className='container'>
          <div className='headerWrapper'>
            <h1 className='logo'>Foodddie..!</h1>
            <nav>
              <a href='#'>Sign Up </a>
              <a href='#'>Login</a>
            </nav>
            <button className='addFoodBtn' onClick={toogleAddFoodVis}>ADD FOOD</button>

          </div>

        </div>
      </header>

      <div className='addFood-Wrapper'>
        <div className='container'>
          {showFoodBox}
        </div>
      </div>

      <div className='body'>
        <div className='container'>
          <div className='foodWrapper'>

            {foodList.map((food) => {
              return <Food key={Math.random()} name={food.name}
                catagory={food.catagory}
                price={food.price}
                offer={food.offer}
                img={food.img}>
              </Food>
            })}

          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
