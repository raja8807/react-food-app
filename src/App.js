import logo from './logo.svg';
import './App.css';
import Food from './components/Food'

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
          </div>
        </div>
      </header>

      <div className='body'>
        <div className='container'>
          <div className='foodWrapper'>
            <Food name={foods[0].name}
              catagory={foods[0].catagory}
              price={foods[0].price}
              offer={foods[0].offer}
              img={foods[0].img}
            ></Food>

            <Food name={foods[1].name}
              catagory={foods[1].catagory}
              price={foods[1].price}
              offer={foods[1].offer}
              img={foods[1].img}

            ></Food>

            <Food name={foods[2].name}
              catagory={foods[2].catagory}
              price={foods[2].price}
              offer={foods[2].offer}
              img={foods[2].img}

            ></Food>

            <Food name={foods[3].name}
              catagory={foods[3].catagory}
              price={foods[3].price}
              offer={foods[3].offer}
              img={foods[3].img}

            ></Food>

            <Food name={foods[0].name}
              catagory={foods[0].catagory}
              price={foods[0].price}
              offer={foods[0].offer}
              img={foods[0].img}
            ></Food>

            <Food name={foods[1].name}
              catagory={foods[1].catagory}
              price={foods[1].price}
              offer={foods[1].offer}
              img={foods[1].img}

            ></Food>

            <Food name={foods[2].name}
              catagory={foods[2].catagory}
              price={foods[2].price}
              offer={foods[2].offer}
              img={foods[2].img}

            ></Food>

            <Food name={foods[3].name}
              catagory={foods[3].catagory}
              price={foods[3].price}
              offer={foods[3].offer}
              img={foods[3].img}

            ></Food>

          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
