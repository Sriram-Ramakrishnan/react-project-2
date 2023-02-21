import React from 'react'
import star from '../images/star.png'
const Card = (props) => {
  let badgeText
  if (props.item.openSpots==0){
    badgeText = "SOLD OUT";
  }
  else if(props.item.location=='Online'){
    badgeText = "ONLINE";
  }
  return (
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img src={props.item.coverImg} alt='cardimg' className='card-img'/>
      <div className='card--stats'>
        <img src={star} alt='star' className='card--star'/>
        <div>{props.item.stats.rating}</div>
        <div className='stats--grey'>({props.item.stats.reviewCount}) • </div>
        <div className='stats--grey'>{props.item.location}</div>
      </div>
      <span className='card-title'>{props.item.title}</span>
      <span className='card-rate'> <span> From ${props.item.price} </span>/ person</span>
    </div>
  )
}

export default Card;
