import {Link,withRouter,Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import { IoMdSettings } from "react-icons/io";
import Popup from 'reactjs-popup'
import './index.css'

const Start=(props)=>{
  const number =Cookies.get('numCook')
  const myItems= localStorage.getItem('cartItems')
  const parsedItems=JSON.parse(myItems)
  const {history}=props


  const clear=()=>{
    if (window.confirm('Do you want to logout')){
    history.replace('/login')
    Cookies.remove('passCook')
    Cookies.remove('numCook')
    }
  }

const clearCart = () => {
  if (window.confirm('Are you sure you want to clear your cart?')) {
      localStorage.removeItem('cartItems');
      alert('Cart has been cleared.');
     
  }
};

const deleteAccount = () => {
  if (window.confirm('Are you surely want to delete your account? This action cannot be undone.')) {
      localStorage.removeItem('numLog');
      localStorage.removeItem('passLog');
      Cookies.remove('numCook')
      Cookies.remove('passCook')
      alert('Your account data has been deleted.');
      history.replace('/')
   
  }
};



  if (number === undefined){
     return <Redirect to='/'/>
  }
 


  return(
    <div className='homeDiv'>
      <button className='tabs'>
        <Link className="link" to="/home">Home</Link>
      </button>
      <button className='tabs'>
        <Link className="link" to="/about">About</Link>
      </button>
      <button  className='tabs'>
        <Link className="link" to="/cart">Cart {parsedItems ? parsedItems.length : '' } </Link>
      </button>

      <Popup
       modal
       trigger={
      <div className='center'>
       <button type="button" className="trigger-button">
          <IoMdSettings size={25}/>
       </button>
       </div>
     }
     className='popup-overlay'
   >
         <div className='insideSettings'>
         <div>
            <button type="button" className="logoutBtn" onClick={clear}>
              Logout
            </button>
            </div>
            <div>
            <button type="button" className="logoutBtn" onClick={clearCart}>
              Clear Cart
            </button>
            </div>
            <div>
            <button type="button" className="logoutBtn" onClick={deleteAccount}>
              Delete Account
            </button>
            </div>
         </div>
  
     
   </Popup>
    </div>
  )
}

export default withRouter(Start);