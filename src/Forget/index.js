import { useState } from "react"
import './index.css'

const Forget=(props)=>{
    const {history}=props
    const mobile=localStorage.getItem('numLog')
    const password=localStorage.getItem('passLog')
    const [mobileNum,setMobile]=useState(null)
    const [error,setError]=useState('')

    const getNumber=(event)=>{
        event.preventDefault()
        if (mobileNum===mobile){
            setError(password)
        }
        else{
            setError('Invalid Mobile Number')
        }
    }

    const getDetails=(event)=>{
        setMobile(event.target.value)
    }

    const backToLogin=()=>{
        history.replace('/login')
    }
    
    return(
            <div className="forgetMainDiv">
            <div className="forgetDiv">
            
                <form  className="forgetFormDiv" onSubmit={getNumber}>
                    <div>
                        <label htmlFor="name">Enter Mobile Number</label>
                    </div>
                    <input id="name" className="forgetInput" onChange={getDetails} type="number"/>
                    
                    <div>
                        <button className="getPassword">Get Password</button>
                    </div>
                </form>
                <button className="getPassword" onClick={backToLogin}>Back to login</button>
                <p className="forgetError">{error}</p>

                </div>
            </div>
    )

}

export default Forget