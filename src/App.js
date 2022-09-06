import './App.css';
import Food from './components/Food'
import AddFood from './components/addFood';
import LoginForm from './components/LoginForm';
import Footer from './components/footer'
import Cart from './components/cart'


import { useEffect, useState } from 'react';

import biriyani from "./components/images/biriyani.jpg"
import burger from "./components/images/burger.jpg"
import dosa from "./components/images/dosa.jpg"
import chicken from "./components/images/chicken.jpg"
import food1 from "./components/images/food1.jpg"
import food2 from "./components/images/food2.jpg"
import food3 from "./components/images/food3.jpg"
import food4 from "./components/images/food4.jpg"
import food5 from "./components/images/food5.jpg"
import food6 from "./components/images/food6.jpg"


function App() {

  const foods = [
    // {
    //   name: "Paradise Biriyani",
    //   catagory: "biriyani",
    //   price: 250,
    //   offer: 50,
    //   img: biriyani
    // }
    // {
    //   name: "Chicken 65",
    //   catagory: "chicken",
    //   price: 90,
    //   offer: 20,
    //   img: chicken
    // },
    // {
    //   name: "Dosa",
    //   catagory: "veg",
    //   price: 45,
    //   offer: 17,
    //   img: dosa
    // },
    // {
    //   name: "Chicken Burger",
    //   catagory: "burger",
    //   price: 250,
    //   offer: 50,
    //   img: burger
    // },

    // {
    //   name: "Paradise Biriyani",
    //   catagory: "biriyani",
    //   price: 250,
    //   offer: 50,
    //   img: biriyani
    // },
    // {
    //   name: "Chicken 65",
    //   catagory: "chicken",
    //   price: 90,
    //   offer: 20,
    //   img: chicken
    // },
    // {
    //   name: "Dosa",
    //   catagory: "veg",
    //   price: 45,
    //   offer: 17,
    //   img: dosa
    // },
    // {
    //   name: "Chicken Burger",
    //   catagory: "burger",
    //   price: 250,
    //   offer: 50,
    //   img: burger
    // }
  ]

  const images = [biriyani,burger,dosa,chicken,food1,food2,food3,food4,food5,food6]

  const [foodImages,setImages] = useState([...images])
  const [foodList, setFoodList] = useState([...foods])
  const [showFoodBox, setShowFoodBox] = useState(false)
  const [isLogedIn, setIsLogedIn] = useState(false)
  const [ordered, setOrdered] = useState(0)
  const [noOfFoods , setNoOfFoods] = useState(0)
  const [showFooter , setShowFooter] = useState("Hide Footer")

  useEffect(() => {
    setIsLogedIn(localStorage.getItem("login"))
  }, [isLogedIn])

  useEffect(()=>{
    if(localStorage.getItem("ordered") != null){
      setOrdered(localStorage.getItem("ordered"))
    }else{
      localStorage.setItem("ordered" , "0")
      setOrdered(localStorage.getItem("ordered"))
    }
  },[])

  useEffect(()=>{
    fetch('https://63106c3b826b98071a410ecf.mockapi.io/foods').then((response)=>{
      if(response.ok){
        return response.json()
      }
      return false
    }).then((data)=>{
      data.forEach((food,i)=>{
        // food.img = `https://picsum.photos/id/${(Math.floor(Math.random()*50))}/200/300`
        food.img = foodImages[i%foodImages.length]
      })
      setFoodList([...data])
    })
  },[])

  useEffect(()=>{
    setNoOfFoods(foodList.length)
  },[foodList])


  function login(bool) {
    localStorage.setItem("login", bool)
    setIsLogedIn(localStorage.getItem("login"))
  }

  function logout() {
    localStorage.setItem("login", "")
    setIsLogedIn(false)
  }


  const toogleAddFoodVis = () => {
    setShowFoodBox(!showFoodBox)
  }

  const add = (food) => {
    food.img = images[Math.floor(Math.random()*images.length)];
    setFoodList((prevlist) => {
      return [food, ...prevlist]
    })
  }

  const removeFood = (index) => {
    setFoodList((prevList) => {
      let list = [...prevList];
      let newList = []
      let ind = 0
      for (let i = 0; i < list.length; i++) {
        if (i != index) {
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
              {
                isLogedIn && <a href='#' onClick={logout}>Logout</a>
              }

              {
                !isLogedIn && <a href='#' onClick={() => {
                  if (!isLogedIn) {
                    toogleAddFoodVis()
                  }
                }}>Login</a>
              }
            </nav>

            <button className='addFoodBtn' onClick={toogleAddFoodVis}>ADD FOOD</button>
            {
              isLogedIn && <Cart></Cart>
            }
          </div>

        </div>
      </header>

      <div className='addFood-Wrapper'>
        <div className='container'>
          {
            showFoodBox && (isLogedIn ? <AddFood add={add}></AddFood> : <LoginForm login={login} />)
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
                img={food.img}
                login = {isLogedIn}
                />
            })}

          </div>
        </div>
      </div>

      <div className='footerContainer'>
        <div className='container'>
          <button onClick={()=>{
            if(showFooter == "Show Footer"){
              setShowFooter("Hide Footer")
            }else{
              setShowFooter("Show Footer")
            }
          }}>{showFooter}</button>
          {
            showFooter == "Hide Footer" && <Footer no={noOfFoods}>
            </Footer>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
