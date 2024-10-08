import { FaStar } from "react-icons/fa6";
import './index.css'


const myReviews=[
    {
        name:'Raju Yadav',
        stars:4,
        color:'rgb(140, 255, 0)',
        review:'Nice product worth for money'
    },
    {
        name:'Likhith Bhai',
        stars:5,
        color:'rgb(980, 585, 0)',
        review:'Really very nice product'
    }, {
        name:'Miss Priyanka',
        stars:2,
        color:'rgb(40, 955,200)',
        review:'Not happy with the product'
    }, {
        name:'Shiva Kumar',
        stars:2,
        color:'rgb(0, 155, 20)',
        review:'Very very poor product'
    }, {
        name:'Kishore Pandey',
        stars:4,
        color:'rgb(240, 2, 0)',
        review:'Not a bad product'
    },
    {
        name:'Robert Hooke',
        stars:1,
        color:'rgb(0, 855, 0)',
        review:'Dont trust this website'
    }
]


const Reviews=()=>{
    return(
        <div className='reviewsMainDiv'>
        <hr/>
            <h1 className="reviewsHeading">Reviews</h1>
            <div className="allReviewDiv">
            {
                myReviews.map(every=>(
                    <div className='reviewDiv'>
                    <div className='reviewRow'>
                    <div style={{backgroundColor:(every.color)}} className='initialDiv'>
                        <p className='initial'>{every.name[0]}</p>
                        </div>
                        <p className='reviewer'>{every.name}</p>
                   
                    
                        <p className={every.stars >3 ? 'star' : "redStar"}>{every.stars} 
                        </p>
                        <FaStar size={16} className={every.stars >3 ? 'star' : "redStar"}/>
                         </div>

                    <p className='review'>{every.review}</p>

                    </div>
                    
                )
               
                )
                
            }
            <hr/>
            </div>
        </div>
    )
}


export default Reviews