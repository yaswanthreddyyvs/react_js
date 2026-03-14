import React from 'react'

const App = () => {
  function click(elem){
    console.log(elem);
  }
  return (
    <div>
      <input onChange={(elem)=>{
        click(elem.target.value)
      }}type="text" placeholder="enter name"/>
    </div>
  )
}

export default App