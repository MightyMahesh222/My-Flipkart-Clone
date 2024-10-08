import { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Start from '../Start'
import './index.css'

const faqsList = [
  {
    id: 0,
    questionText: 'Is this website real?',
    answerText:
      'Website is real but not items',
  },
  {
    id: 1,
    questionText: 'What are the main languages used in this website?',
    answerText:
      'This website was completely developed by using REACT JS library',
  },
  {
    id: 2,
    questionText:
      'Is this so hard to develop a website like this?',
    answerText:
      'I cant say its easy but if you know react concepts like fetching and routing it will be easy for you.',
  },
  {
    id: 3,
    questionText: 'Why some items are so cheap?',
    answerText:
      'Consider them as discount',
  },
  {
    id: 4,
    questionText: 'Can i get your contact number?',
    answerText:
      'Here is the my mobile number 81796825**',
  },
  {
    id: 5,
    questionText: 'Why BUY option is showing wrong pop-up?',
    answerText:
      'No Comments',
  },
  {
    id: 6,
    questionText: 'Can i get any of your social media account?',
    answerText:
      'Will be updated',
  },
  

]


const About=()=>{
    const [clickedIds,setIds]=useState([])

    const clickedBtn=(myId)=>{
        if (clickedIds.includes(myId)){
            setIds(clickedIds.filter((id)=>id!==myId))
        } else{
            setIds([...clickedIds,myId])
        }
    }
    return(
    <div>
    <Start/>
    <div className='aboutDiv'>
        <h1 className='mainHeading'>About this website</h1>
        <div>
            {
                faqsList.map(every=>{
                    return(
                        <div className='singleQuestionDiv'>
                        <div className='faqRowDiv'>
                        <p className='faqQuestion'>{every.questionText}</p>
                        <div>
                        <button className='arrowBtn' onClick={()=>clickedBtn(every.id)}>
                        {clickedIds.includes(every.id) ? <FaAngleUp size={20}/>  : <FaAngleDown size={20}/> }
                        </button>
                        </div>
                        </div>
                        {clickedIds.includes(every.id) ? 
                        <div>
                        <hr className='horizontal'/>
                        <p className='faqAnswer'>{every.answerText}</p> 
                        
                        </div>
                        : ''
                        }
                        </div>
                    )
                })
            }
        </div>
        </div>
    </div>
    )
}

export default About;