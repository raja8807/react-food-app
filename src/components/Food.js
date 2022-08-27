import './Food.css'
import { useState } from "react";
import { faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';



function Food(props) {

    const [amount, setAmount] = useState(props.price)
    const [btnDis, setBtnDis] = useState(false)
    const [ordered, setOrdered] = useState("")
    const [confirm, setConfirm] = useState(false)
    const [confirmMsg , setConfirmMsg] = useState("")

    const updatePrice = () => {
        let newAmount = parseInt((props.price - ((props.offer / 100) * props.price)))
        setAmount(newAmount)
        setBtnDis(true)
        setConfirm(false)
        setConfirmMsg("")

    }

    const updateOrdered = () => {
        setOrdered("Ordered..!")
        setBtnDis(true)
        setConfirm(false)
        setConfirmMsg("")


    }

    const removeFood = () => {
        if (confirm) {
            props.remove(props.index)
            setConfirm(!confirm)
        } else {
            setConfirm(!confirm)
            setConfirmMsg("")
            setConfirmMsg("Click remove agian to delete")

        }
    }



    return (


        <div className='foodBox'>
            <button className='delBtn' onClick={removeFood}>X</button>
            <p>{confirmMsg}</p>

            <div className='foodImg'>
                <img src={props.img} alt="Logo" />

            </div>
            <div className='foodName'>
                <p className='priName'>{props.name}</p>
                <p className='catagories'>{props.catagory}</p>
                <p className='price'>RS.<span>{amount}</span></p>
                <p className='offer'><span>{props.offer}</span>%Off</p>
            </div>
            <div className='btnWrapper'>
                <button onClick={() => {
                    updateOrdered()
                }}>Order Now</button>
                <button onClick={updatePrice} disabled={btnDis}>Apply Offer</button>
            </div>
            <p className='order'>{ordered}</p>

        </div>

        
    )
}

export default Food;