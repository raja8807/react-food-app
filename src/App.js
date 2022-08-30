import './App.css';
import Food from './components/Food'
import AddFood from './components/addFood';
import Footer from './components/footer'

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
    },

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

  // const [foodList, setFoodList] = useState([])
  const [foodList, setFoodList] = useState([...foods])

  const [showFoodBox, setShowFoodBox] = useState(false)


  const toogleAddFoodVis = () => {
    setShowFoodBox(!showFoodBox)
  }

  const add = (food) => {
    // let newFood = food
    food.img = burger;
    setFoodList((prevlist) => {
      return [food, ...prevlist]
    })
    // console.log(...foodList)
  }

  const removeFood = (index) => {
    setFoodList((prevList) => {
      let list = [...prevList];
      let newList = []
      let ind = 0
      for (let i = 0; i < list.length; i++) {
        if(i != index) {
          newList[ind] = list[i]
          ind++
        }
      }
      return newList
    })
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

          {
            showFoodBox && <AddFood add={add}></AddFood>
          }

        </div>
      </div>

      <div className='body'>
        <div className='container'>
          {
            foodList.length === 0 && <p className='noFoods'>No Foods Added</p>
          }
          <div className='foodWrapper'>


            {foodList.map((food, i) => {
              return <Food key={Math.random()}
                remove={removeFood}
                index={i}
                name={food.name}
                catagory={food.catagory}
                price={food.price}
                offer={food.offer}
                img={food.img}>
              </Food>
            })}

          </div>
        </div>
      </div>

      <div className='footerContainer'>
            <div className='container'>
              <Footer>
              </Footer>
            </div>
      </div>
    </div>
  );
}

export default App;
