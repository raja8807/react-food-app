import "./LoginForm.css"
import {useState} from 'react'

function LoginForm(props){

    const [inCorrectPwd , setInCorrectPwd] = useState("Please Login to Add Foods")

    function validate(event) {
        event.preventDefault()
        // console.log();
        if(event.target[0].value == "Raja" && event.target[1].value == "Raja"){
            setInCorrectPwd(false) 
            props.login(true)
        }else{
            setInCorrectPwd("Incorrect Username or Password")
            setTimeout(()=>{
                setInCorrectPwd("Please Login to Add")
            },5000)
        }
    }

    return(
        <div>
            <form onSubmit={validate}>
                <label>User Name</label> <input type="text" />
                <label>Password</label> <input type="password"/>
                <input type="submit" value="login"/>
            </form>
            <p className="error">{inCorrectPwd}</p>
        </div>
    )
}

export default LoginForm;