import './footer.css'
import { Component } from 'react'

class Footer extends Component{
    render(){
        return  <footer>
         <div className='footerWrapper'>
            <div className='footerLeft'>
<p>Designed By <b>Raja Rathinam.</b></p>
            </div>
            <div className='footerMiddle'>
                <div className='socialLink'><p>T</p></div>
                <div className='socialLink'><p>F</p></div>
                <div className='socialLink'><p>Li</p></div>
                <div className='socialLink'><p>I</p></div>
                <div className='socialLink'><p>Y</p></div>
            </div>
            <div className='footerRight'>

            </div>
         </div>
        </footer>
    }
}

export default Footer;