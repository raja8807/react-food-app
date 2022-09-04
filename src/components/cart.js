import './cart.css'

import {useState} from 'react'

function Cart(props){
    return(<div className='cart'>
        <div className='icon'></div>
        <div className='num'>{props.x}</div>
    </div>)
}

export default Cart