import './addFood.css'
import {useState} from 'react'

function AddFood(props){

    // class newFood{
    //     constructor(){
    //         this.name = ""
    //         this.catagory = ""
    //         this.price = ""
    //         this.offer = ""
    //     }
    // }

    const [newFood,setNewFood] = useState({name : "",
    catagory : "",
    price:"",
    offer:""})

    const[error,setError] = useState("")

    // const addFood=(event)=>{
    //     event.preventDefault()
    //     let food = {...newFood};
        
    //     // food.name = event.target[0].value
    //     // food.catagory = event.target[1].value
    //     // food.price = event.target[2].value
    //     // food.offer = event.target[3].value

    //     food = {...newFood,name:event.target[0].value}
    //     food = {...newFood,catagory:event.target[1].value}
    //     food = {...newFood,price:event.target[2].value}
    //     food = {...newFood,offer:event.target[3].value}

    //     // let i = 0
    //     // for(let key in food){
    //     //     food[key] = event.target[i].value
    //     //     i++
    //     // }
        
    //     props.add(food)

    //     // event.target[0].value = ""
    //     // event.target[1].value = ""
    //     // event.target[2].value = ""
    //     // event.target[3].value = ""

    //     for(let i=0; i<event.target.length-1;i++){
    //         event.target[i].value = ""
    //     }
    // }

    const nameHandle = (event)=>{
        setNewFood({...newFood,name:event.target.value})
    }
    const catagoryHandle = (event)=>{
        setNewFood({...newFood,catagory:event.target.value})
    }
    const priceHandle = (event)=>{
        setNewFood({...newFood,price:event.target.value})
    }
    const offerHandle = (event)=>{
        setNewFood({...newFood,offer:event.target.value})
    }

    const addFood = (event)=>{
        event.preventDefault()
        
    if(event.target[0].value != "" && event.target[1].value != "" && event.target[2].value != "" && event.target[3].value != ""){
        props.add(newFood)
        setError("")

    }else{
        setError("Please Fill All The Fields..!")
    }

    // console.log(event.target);

            for(let i=0; i<event.target.length-1;i++){
            event.target[i].value = ""
        }
    }



    return(
        <div className='addFood'>
            <form onSubmit={addFood}>
                <label>Food Name</label><input type={"text"} onChange={nameHandle}/>
                <label>Catagory</label><input type={"text"} onChange={catagoryHandle}/>
                <label>Price</label><input type={"number"} onChange={priceHandle}/>
                <label>Offer</label><input type={"number"} onChange={offerHandle}/>
                <input type={"submit"} value={"ADD"}/>
            </form>
            <p className='error'>{error}</p>
        </div>
    )
}

export default AddFood;