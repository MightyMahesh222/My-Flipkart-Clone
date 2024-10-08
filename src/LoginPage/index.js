import {useState} from 'react'
import { Redirect,Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login=(props)=>{
    const {history}=props
    const [user,setUser]=useState('')
    const [password,setPass]=useState('')
    const [errMsg,setErr]=useState('')
    const [tog,setTog]=useState(false)
    const  pass=Cookies.get('numCook')
    const number =Cookies.get('passCook')
    const maheshNum=localStorage.getItem('numLog')
    const maheshPass=localStorage.getItem('passLog')

  
     const loggedin=()=>{
        if ((user && password !== '')&&(user===maheshNum && password===maheshPass)){
        history.replace('/home')
        Cookies.set('passCook',maheshNum,{expires:365* 10})
        Cookies.set('numCook',maheshPass,{expires:365* 10})

        }
        else if (user && password === ''){
            setErr('dont keep credentials empty')
        }
        else if (user!==maheshNum){
            setErr('Number Mismatch')
        }
        else if (user!==maheshPass){
            setErr('Password Mismatch')
        }
    }
    const getUser=(event)=>{
        setUser(event.target.value)
    }

    const goBack=()=>{
         history.replace('/')
    }

    const Toggle=()=>{
            setTog(!tog)
    }

    const getPass=event=>{
        setPass(event.target.value)
    }

    const type= tog===true ? 'text' : 'password'

    if (number&&pass !== ''){
        return <Redirect to='./home'/>
     }  



    return(
    <div className='loginDiv'>
    <div className='marginTop'>
    <h1 className='signHeading'>LOGIN HERE</h1>
        <div className='formDiv'>
        <div>
            <form>
                <div className='inputDiv'>
                    <div>
                        <label htmlFor="name">Mobile</label>
                    </div>
                        <input id="name" placeholder='Enter your mobile' onChange={getUser} type="text"/>
                </div>
                <div className='inputDiv'>
                    <div>
                        <label htmlFor="password">Password</label>
                    </div>
                        <input placeholder='Enter Password' id="password" onChange={getPass} type={type}/>
                </div>
            </form>
        </div>
        <div className='spaceBetween'>
        <div className='rowDiv'>
                <input type='checkbox' onClick={Toggle}/>
           
                <p className='show'>Show</p>
            
        </div>
        <div>
        <Link className='forget' to='/forget'>Forget Password?</Link>
        </div>
        </div>
        <div className='spaceBetween'>
            <button className='back' onClick={goBack}>
                Back
            </button>
            <button className='back' onClick={loggedin}>
                Login
            </button>
        </div>
       

        <p className='error'>{errMsg}</p>
        </div>
        </div>
    </div>
    )
}

export default Login