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

  // const [foodList, setFoodList] = useState([])
  const [foodList, setFoodList] = useState([...foods])
  const [showFoodBox, setShowFoodBox] = useState(false)

  // const[ordered,setOrdered] = useState([])

  const [isLogedIn, setIsLogedIn] = useState(false)

  useEffect(() => {
    // alert("ok")
    setIsLogedIn(localStorage.getItem("login"))
    // alert(localStorage.getItem("login"))
  }, [isLogedIn])

  useEffect(()=>{
    fetch('https://63106c3b826b98071a410ecf.mockapi.io/foods').then((response)=>{
      return response.json()
    }).then((data)=>{
      // console.log(data);
      data.forEach((food)=>{
        food.img = `https://picsum.photos/id/${(Math.floor(Math.random()*50))}/200/300`
      })
      setFoodList(data)
    })
  },[])


  function login(bool) {
    localStorage.setItem("login", bool)
    setIsLogedIn(localStorage.getItem("login"))
  }

  function logout() {
    localStorage.setItem("login", "")
    // setIsLoggedIn(localStorage.getItem("login"))
    setIsLogedIn(false)
    // toogleAddFoodVis()
  }


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
            {/* <Cart x={ordered.length}></Cart> */}

            <button className='addFoodBtn' onClick={toogleAddFoodVis}>ADD FOOD</button>

          </div>

        </div>
      </header>

      <div className='addFood-Wrapper'>
        <div className='container'>

          {
            showFoodBox && (isLogedIn ? <AddFood add={add}></AddFood> : <LoginForm login={login} />)
          }

          {/* <LoginForm></LoginForm> */}

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
          <Footer>
          </Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
