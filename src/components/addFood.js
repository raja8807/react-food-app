import './addFood.css'

function AddFood(props){

    class newFood{
        constructor(){
            this.name = ""
            this.catagory = ""
            this.price = ""
            this.offer = ""
        }
    }

    // let x = new newFood();

    const addFood=(event)=>{
        event.preventDefault()
        let food = new newFood();

        // food.name = event.target[0].value
        // food.catagory = event.target[1].value
        // food.price = event.target[2].value
        // food.offer = event.target[3].value

        let i = 0
        for(let key in food){
            food[key] = event.target[i].value
            i++
        }
        
        props.add(food)

        // event.target[0].value = ""
        // event.target[1].value = ""
        // event.target[2].value = ""
        // event.target[3].value = ""

        for(let i=0; i<event.target.length-1;i++){
            event.target[i].value = ""
        }
    }



    return(
        <div className='addFood'>
            <form onSubmit={addFood}>
                <label>Food Name</label><input type={"text"}/>
                <label>Catagory</label><input type={"text"}/>
                <label>Price</label><input type={"number"}/>
                <label>Offer</label><input type={"number"}/>
                <input type={"submit"} value={"ADD"}/>
            </form>
        </div>
    )
}

export default AddFood;