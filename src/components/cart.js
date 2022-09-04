import './cart.css'

import {useState, useEffect} from 'react'

function Cart(){

    const[ordered , setOrdered] = useState(0)

    useEffect(()=>{
        setInterval(()=>{
            setOrdered(localStorage.getItem("ordered"))
        },10)
    },[])

    return(<div className='cart' onClick={()=>{
        localStorage.setItem("ordered" , "0")
    }}>
        <div className='icon'><a href='#'>&#128722;</a></div>
        <div className='num'>{ordered}</div>
    </div>)
}

export default Cart;