import './Food.css'

function Food(props){

    return (
        <div className='foodBox'>
            <div className='foodImg'>
            <img src={props.img} alt="Logo" />
            </div>
            <div className='foodName'>
                <p className='priName'>{props.name}</p>
                <p className='catagories'>{props.catagory}</p>
                <p className='price'>RS.<span>{props.price}</span></p>
                <p className='offer'><span>{props.offer}</span>% Off.</p>
            </div>
            <div className='btnWrapper'>
                <button>Order Now</button>
                <button>Add TO Cart</button>
            </div>
        </div>
    )
}

export default Food;