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
                <div className='socialLink'><p className='fa fa-facebook'></p></div>
                <div className='socialLink'><p className='fa fa-twitter'></p></div>
                <div className='socialLink'><p className='fa fa-instagram'></p></div>
                <div className='socialLink'><p className='fa fa-linkedin'></p></div>
                <div className='socialLink'><p className='fa fa-youtube'></p></div>
            </div>
            <div className='footerRight'>
            </div>
         </div>
        </footer>
    }
}

export default Footer;