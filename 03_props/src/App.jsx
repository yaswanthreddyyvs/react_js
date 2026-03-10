import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className='parent'>
      <Card user='Yaswanth' age={20} img='https://images.unsplash.com/photo-1769228092677-9f2d7d7c19f3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
      <Card user='Shivaram' age={21} img='https://images.unsplash.com/photo-1770034285769-4a5a3f410346?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>

      
    </div>
  )
}

export default App