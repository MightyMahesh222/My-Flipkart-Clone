import { Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Start from '../Start'
import './index.css'


const Cart=()=>{
    const [useCart,setUseCart]=useState([])
    const [homeNavigate,setNavigation]=useState(false)
    const [errorBalance,setErrorBalance]=useState(false)

    const [totalAmount,setAmount]=useState(0)

    const calculateAmount=(items)=>{
        const amount=items.reduce((sum,item)=>{
            return sum + Math.round((item.price*10 )* item.count)
        },0)
        setAmount(amount)
    }

    const showError=()=>{
        setErrorBalance(true)
       const intervalId= setInterval(() => {
            setErrorBalance(false)
            clearInterval(intervalId)
        }, 3000);
       
    }
    

    useEffect(()=>{
        const cartItems=localStorage.getItem('cartItems')
        const parsedCart=JSON.parse(cartItems) || []
        if(parsedCart!==null){
            setUseCart(parsedCart)
            calculateAmount(parsedCart)
        }

    

    },[])

    const removeLocal=(id)=>{
      const reModified=useCart.filter(item=>(item.id !== id))
      localStorage.setItem('cartItems',JSON.stringify(reModified))
      setUseCart(reModified)
      const amount=reModified.reduce((sum,item)=>{
        return sum + Math.round((item.price*10 )* item.count)
    },0)
    setAmount(amount)
      
    }


    const backToHome=()=>{
       setNavigation(true)
    }


    if (homeNavigate){
        return <Redirect to='/home'/>
    }

    return(
    <div>
    <Start/>
    <div className='cartDiv'>
    {errorBalance&& 
    <div className='errorDiv'>
        <p>Insufficient Bank Balance</p>
    </div>}
    {useCart.length>0 ? <h1 className='yourCart'>Your Cart</h1> : ''}
{useCart.length>0  ? 
    
    (useCart.length>0 && useCart.map((every,index)=>(
        
        <div key={index} className='cartItemDiv'>
        <div>
            <img className='cartImage' alt={every.id} src={every.image}/>
           </div> 
            <div className='titleDiv'>
            <p className='cartTitle'>{every.title}</p>
            <div>
                <p className='quantity'>Quantity : {every.count}</p>
                <p className='quantity'>Price : {Math.round(every.price)*10} x {every.count} RS/-</p>
            </div>
            </div>
                <div>
                <button className='delete' onClick={()=>removeLocal(every.id)}>Delete</button>
            </div>
        </div>
    
        
        
    ))): (
        <div className='noItemsDiv'>
        <h1 className='noItems'>You have no items in the cart.</h1>
        <button className='shopNow' onClick={backToHome}>Shop Now</button>
        
        </div>
        )
       
}        {useCart.length >0 &&
        <div className='amountMainDiv'>
                <div className='totalAmountDiv'>
                    <p className='amount'>Total Amount : {totalAmount} RS/-</p>
                </div>
                <div>
                    <button onClick={showError} className='buyNow'>BUY NOW</button>
                </div>
        </div>

}
        </div>
    </div>
    )
}

export default Cart;