import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'


const MainPage=(props)=>{
    const {history}=props
    const  password=Cookies.get('passCook')
    const number =Cookies.get('numCook')
    const maheshPass=localStorage.getItem('passLog')
    const maheshNum=localStorage.getItem('numLog')
    const intoSignin=()=>{
        history.replace('/signIn')
    }

    const intoLogin=()=>{
        history.replace('/login')
    }
    
   
    
    if (password && number !== undefined){
        return <Redirect to='./home'/>
     }  

    return(
        <div className='mainPage'>
        <img alt="welcome" className='welcomeImg' src="https://ik.imagekit.io/sdce03tuc/4b39a94252cddcc7d20326c140278c4e.jpg"/>
                <p className='descriptions'>Hello customer,welcome to our website.If you are visiting our website for the first time,please sign in to our website.If you already have an account then please tap login.</p>
                <div>
                <button className='loginBtn' onClick={intoSignin}>Sign in</button>
                <button className="loginBtn" onClick={intoLogin}>Log in</button>
                </div>
        </div>
    )
}

export default MainPage