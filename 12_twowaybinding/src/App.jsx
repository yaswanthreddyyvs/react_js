import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("Form Submitted ",title)
    setTitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder="enter your name" 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
