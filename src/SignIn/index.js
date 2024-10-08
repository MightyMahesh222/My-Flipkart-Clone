import {useState} from 'react'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import './index.css'

const SignIn=(props)=>{
    const {history}=props
    const [number,setUser]=useState(null)
    const [password,setPass]=useState('')
    const [confirm,setConfirm]=useState('')
    const [errMsg,setErr]=useState('')
    const maheshPass=localStorage.getItem('passLog')
    const maheshNum=localStorage.getItem('numLog')

    
    const signingIn=()=>{
        if (confirm !== password){
            setErr('passwords are not same')
        }
       
        else if(password!== "" && number.length===10 && password===confirm){
            history.replace('./home')
            localStorage.setItem('passLog',password)
            localStorage.setItem('numLog',number)
            Cookies.set('passCook',password,{expires:365})
            Cookies.set('numCook',number,{expires:365})
            

        }
        else if (password.length!==10){
            setErr('invalid mobile number')
        }
        else if(password && number === ''){
            setErr('dont keep credentials empty')
        }
        else{
            setErr('invalid')
        }
       
    }
    const getUser=(event)=>{
        setUser(event.target.value)
    }

    const goBack=()=>{
        history.replace('/')
   }


    const getPass=event=>{
        setPass(event.target.value)
    }
    const confirmPass=event=>{
        setConfirm(event.target.value)
    }

    if (maheshNum && maheshPass !== ''){
        return <Redirect to='./home'/>
     }  

    return(
    <div className='signInDiv'>
    <div className='marginTop'>
    <h1 className='signHeading'>SIGN IN HERE</h1>
    <div className='signFormDiv'>
        <div>
                <div className='inputDivs'>
                    <div>
                        <label htmlFor="name">Mobile Number</label>
                    </div>
                    <input  placeholder='Enter Mobile Number' id="name" onChange={getUser} type="number"/>
                </div>
                <div className='inputDivs'>
                    <div>
                        <label htmlFor="password">Set Password</label>
                    </div>
                    <input id="password" placeholder='Set Password' onChange={getPass} type="password"/>
                </div>
                <div className='inputDivs'>
                    <div>
                        <label htmlFor="password1">Confirm Password</label>
                    </div>
                    <input id="password1" placeholder='Confirm Password' onChange={confirmPass} type="password"/>
                </div>
                
        </div>
        <div>
        <button className='loginBtn' onClick={goBack}>
            Back
        </button>
        <button className='loginBtn' onClick={signingIn}>
            SignIn
        </button>
       
        </div>

        <p className='error'>{errMsg}</p>
        </div>
        </div>
    </div>
    )
}

export default SignIn