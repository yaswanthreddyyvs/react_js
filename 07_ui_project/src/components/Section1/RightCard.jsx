import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full flex-shrink-0 w-80 overflow-hidden relative bg-red-500 rounded-4xl'>
        <img className='h-full w-full object-cover'src={props.img} alt=""></img>
        <RightCardContent tag={props.tag} intro={props.intro} id={props.id} color={props.color}/>
    </div>
  )
}

export default RightCard