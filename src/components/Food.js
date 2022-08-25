import './Food.css'
import { useState } from "react";



function Food(props) {

    const[amount,setAmount] = useState(props.price)
    const [btnDis,setBtnDis] = useState(false)
    const [ordered,setOrdered] = useState("")

    const updatePrice=()=>{
        let newAmount = (props.price-((props.offer/100)*props.price))
        setAmount(newAmount)
        setBtnDis(true)
    }

    const updateOrdered=()=>{
        setOrdered("Ordered..!")
        setBtnDis(true)
    }



    return (
        <div className='foodBox'>
            <div className='foodImg'>
                <img src={props.img} alt="Logo" />
            </div>
            <div className='foodName'>
                <p className='priName'>{props.name}</p>
                <p className='catagories'>{props.catagory}</p>
                <p className='price'>RS.<span>{amount}</span></p>
                <p className='offer'><span>{props.offer}</span>%Off</p>
                <p className='order'>{ordered}</p>
            </div>
            <div className='btnWrapper'>
                <button onClick={()=>{
                    updateOrdered()
                }}>Order Now</button>
                <button onClick={updatePrice} disabled={btnDis}>Apply Offer</button>
            </div>
        </div>
    )
}

export default Food;