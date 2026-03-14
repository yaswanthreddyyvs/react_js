import React, { useState } from 'react'

const App = () => {
  const [num,setnum] = useState({user:'yaswanth',age:20})
  const changeNum = () =>{
    const newNum={...num}
    newNum.user='Aman'
    setnum(newNum)
  }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={changeNum}>click</button>
    </div>
  )
}

export default App