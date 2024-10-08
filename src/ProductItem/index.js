import { useEffect,useState } from 'react'
import { FaSquarePlus ,FaSquareMinus} from "react-icons/fa6";
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Home from '../Start'
import Reviews from '../ReviewsPage';
import './index.css'

const viewType={
    success:'SUCCESS',
    failure:'FAILURE',
    loading:'LOADING',
}

const ProductItem=(props)=>{
    const [count,setCount]=useState(1)
    const [cartItems,setCartItems]=useState([])
    const [method,setMethod]=useState(viewType.loading)
    const [item,setItem]=useState({})
    const [alertText,setAlert]=useState(false)
    const [isAd,setAd]=useState(false)

    const {match} = props
    const {params} = match
    const {id} = params
    const {title,image,price,description}=item
    const cartItem={...item}
        
    const addingCart=()=>{
        setAlert(true)
        setInterval(() => {
            setAlert(false)
        }, 4000);
        setCartItems((prev)=>{
            const isRepeated=prev.find(every=>(String(id)===String(every.id)));
            let updatedCartList;
            if (!!isRepeated){
                updatedCartList=prev.map(every=>{
                    if (every.id===cartItem.id){
                        return {...every,count:every.count+count}
                    }
                    else{
                        return every
                    }
                })
            }
            else{
                updatedCartList=[...prev,{...cartItem,count:count}]
            }
            localStorage.setItem('cartItems',JSON.stringify(updatedCartList))
            return updatedCartList
        })
    }

    useEffect(()=>{
        const storedItems=localStorage.getItem('cartItems')
        const modified=JSON.parse(storedItems)
        if (storedItems){
            setCartItems(modified)
        }
    },[])

    const increaseCount=()=>{
        setCount(count+1)
    }

    const decreaseCount=()=>{
        if (count>1){
        setCount(count-1)
        }
    }

    useEffect(()=>{

        setTimeout(() => {
            setAd(true)
        }, 6000);

       
        const getting=async()=>{
            try {
            const fetchingItem=await fetch(`https://fakestoreapi.com/products/${id}`)
            const data=await fetchingItem.json()
            console.log(data)
            setItem(data)
            setMethod(viewType.success)
        } catch (error) {
                setMethod(viewType.failure)
        }
        }
        getting()
    },[id])

    const skipAd=()=>{
        setAd(false)
    }

    const modifiedPrice=price ? Math.round(price): 0


    const successView=()=>(
          <div className='productDiv'>
    <div className='addedCart'>
       {alertText&&(<p>Item added to the cart!</p>)}
       
        </div>
        <img alt={title} className='itemImage' src={image} />
        <p className='itemTitle'>{title}</p>
        <div className='ratingDiv'>
        <p className='prices'>Price :</p>
            <p className='discountPara'>{modifiedPrice*15}</p>
            <p className='price'>{modifiedPrice*10} RS/-</p>
            </div>        
        <p className='description'>{description}</p>
        <div className='plusMinusDiv'>
           <button className='plusBtn' onClick={decreaseCount}> <FaSquareMinus className='plusIcon' /></button>
            <p className='itemCount'>{count}</p>
            <button className='plusBtn' onClick={increaseCount}> <FaSquarePlus className='plusIcon' /></button>
            </div>
            { isAd ? <div className='addDiv'>
                <div className='skipDiv'>
                    <button className='skipBtn' onClick={skipAd}>Skip ad</button>
                </div> 
            </div> : ''}
        <button onClick={addingCart} className='addCart'>Add to cart</button>
        <div>
        </div>
         <Reviews/>
        </div>
    )

    const loadingView=()=>(
        <div className='loaderItem'>
          <Loader type="Triangle" color="#000000" height={40} width={50} />
          </div>
    )

    /*Audio","BallTriangle","Bars","Circles","Grid","Hearts","Oval","Puff","Rings","TailSpin","ThreeDots","Watch","RevolvingDot","Triangle","Plane","MutatingDots","CradleLoader"*/
    const failureView=()=>(
        <div className='failedView'>
            <img alt="error" className="errorImg" src='https://ik.imagekit.io/sdce03tuc/no-internet-connection-illustration-download-in-svg-png-gif-file-formats--lost-issue-not-connected-things-pack-science-technology-illustrations-4979870.png'/>
            <p className='errorPara'>You are Disconnected</p>
        </div>
    )



    const typeOfMethod=()=>{
        switch(method){
            case (viewType.success):
                return successView()
            case (viewType.loading):
                return loadingView()
            case (viewType.failure):
                return failureView()
            default:
                return null
            }
        }
    
    
    return(
        <div>
        <Home/>
      {typeOfMethod()}
        </div>
    );
}


export default ProductItem