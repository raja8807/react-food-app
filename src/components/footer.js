import './footer.css'
import { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = { foods: 0 }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ foods: this.props.no })
        }, 10)
    }

    componentDidUpdate(){
        localStorage.setItem("no of foods" , this.props.no)
    }

    componentWillUnmount() {
        alert("footer will be hidden")
    }

    render() {
        return <footer>
            <div className='footerWrapper'>
                <div className='footerLeft'>
                    <p>Designed By <b>Raja Rathinam.</b></p>
                </div>
                <div className='footerMiddle'>
                    <div className='socialLink'><p className='fa fa-facebook'></p></div>
                    <div className='socialLink'><p className='fa fa-twitter'></p></div>
                    <div className='socialLink'><p className='fa fa-instagram'></p></div>
                    <div className='socialLink'><p className='fa fa-linkedin'></p></div>
                    <div className='socialLink'><p className='fa fa-youtube'></p></div>
                </div>
                <div className='footerRight'>
                    <p><b>{this.state.foods}</b> Foods</p>
                </div>
            </div>
        </footer>
    }
}

export default Footer;