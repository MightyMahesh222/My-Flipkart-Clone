import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'js-cookie'
import { FaStar } from "react-icons/fa6"
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
       
import Start from '../Start'
import './index.css'

const viewType={
    success:'SUCCESS',
    failure:'FAILURE',
    loading:'LOADING',
}

const Home = (props) => {
    const [details, setDetails] = useState([]);
    const [category, setCategory] = useState('');
    const [isAd,setAd]=useState(false)
    const [view,setView]=useState(viewType.loading)
    const number =Cookies.get('numCook')


    useEffect(()=>{

        setTimeout(() => {
            setAd(true)
        }, 6000);

       
    
    const fetching=async()=>{
        try {
        setView(viewType.loading)
        let url='https://fakestoreapi.com/products'
        if (category!==''){
            url=`https://fakestoreapi.com/products/category/${category}`
        }
    const response=await fetch(url)
    const data=await response.json()
    setView(viewType.success)
    setDetails(data)
    } catch (error) {
    setView(viewType.failure)
    setDetails([])
    console.log(error)
    }
    }
    fetching()
    },[category])

    const skipAd=()=>{
        setAd(false)
    }

    const successView=()=>(

            <div className='center'>     
            <div className='itemsDiv'>
            { isAd ? <div className='adDiv'>
                <div className='skipDiv'>
                    <button className='skipBtn' onClick={skipAd}>Skip ad</button>
                </div> 
            </div> : ''}
            {details.map(every=>(
                <Link key={every.id} to={`/product/${every.id}`} className='sizing'>
                <img className='image' alt={every.title} src={every.image} />
                <p className='title'>{every.title}</p>
                <div className='blackBack'>
                <div className='ratingDiv'>
                <p className='discount'>{Math.round(every.price)*15}</p>
                <p className='price'>{Math.round(every.price)*10} RS/-</p>
                </div>
               <div className='ratingDiv'> 
                <p className='rating'>rating: {every.rating.rate}</p>
                <FaStar className='staring'/>
                </div>
                <p className='rating'>Available : {every.rating.count}</p>
                </div>
                </Link>
            ))}
            </div>
            </div>
    )

    const loadingView=()=>(
        <div className='loaderDiv'>
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

const verifyingMethod=()=>{

    switch(view){
        case viewType.loading:
            return loadingView()
        case viewType.success:
            return successView()
        case viewType.failure:
            return failureView()
        default:
            return null
    }
}


if (number === undefined){
    return <Redirect to='/'/>
 }


    return(
        
    <div>
    
    <Start/>
        <div className='profileDiv'>
        
            <h1 className='mainHeading'>KlipCart</h1>
            <div>
                <button className={category==='' ? 'active' : 'inActive'} onClick={()=>setCategory('')}>ALL</button>
                <button className={category==='jewelery' ? 'active' : 'inActive'}  onClick={()=>setCategory('jewelery')}>Jewelery</button>
                <button className={category==='electronics' ? 'active' : 'inActive'}  onClick={()=>setCategory('electronics')}>Electronic</button>
                <button className={category==="men's clothing" ? 'active' : 'inActive'}  onClick={()=>setCategory("men's clothing")}>Men</button>
                <button className={category==="women's clothing" ? 'active' : 'inActive'}  onClick={()=>setCategory("women's clothing")}>Women</button>
            </div>
           {verifyingMethod()}
        </div>
    </div>
    )

}

export default Home;