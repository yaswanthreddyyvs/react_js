import React from 'react'

const Block = (props) => {
  return (
    
      <div className='Block'>
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <p>{props.content}
        </p>
        <button>View Profile</button>
      </div>
    
  )
}

export default Block