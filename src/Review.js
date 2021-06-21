import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Review = () => {

  const [index,setIndex]=useState(0)
  let persone = people[index]
  let {name,job,image,text} =persone

  let checkIndex=(index)=>{
    if(index > people.length -1){
      return  0
    }
    if (index < 0){
      return people.length -1
    }
    return index
  }

  let prevIndex=()=>{
    setIndex((index)=>{
      index= index -1
      return checkIndex(index)
    
    
    })
  }

  let randomSuprice=()=>{
    let randomIndex = Math.round(Math.random()*(people.length-1))
    console.log(Math.round(randomIndex));
    return setIndex(randomIndex)
  }


  let nextIndex=()=>{
    setIndex((index)=>{
   index = index +1
    return checkIndex(index)
 
    })
  }

  
  return <>
 <article className="review">
   <div className='img-container'>
     <img src={image} alt={name} className='person-img'/>
     <span className='quote-icon'> <FaQuoteRight /></span>
   </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
    <div className="button-container">
      <button className="prev-btn" onClick={prevIndex}> <FaChevronLeft/> </button>
      <button className="next-btn" onClick={nextIndex}> <FaChevronRight/> </button>
    </div>
  <button className='random-btn'  onClick={randomSuprice}>suprice me</button>
 </article>
  </>;
};

export default Review;
