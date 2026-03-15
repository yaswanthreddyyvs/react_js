import React from 'react'
import {useState} from 'react'

const App = () => {
  
  const formHandler=(e)=>{
    e.preventDefault()
    let copyTask=[...task];
    copyTask.push({title,details})
    setTask(copyTask)
    setTitle('')
    setDetails('')
  }

  const deleteNote=(idx)=>{
    const copyTask=[...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }
  
  const [title, setTitle] = useState('')
  const [details,setDetails] = useState('')
  const [task,setTask] = useState([])
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
        formHandler(e)}}
        className='flex flex-col p-10 gap-5 lg:w-1/2'>
          <h1 className='text-3xl font-bold'>Add Notes</h1>
          {/* firstinput */}
          <input 
          type="text" 
          placeholder="enter notes heading" 
          className='px-5 py-2 border-2 rounded outline-none'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          />

          <textarea 
          type="text" 
          className='px-5 h-20 py-2 border-2 rounded outline-none h-32' 
          placeholder='Write Details'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          ></textarea>

          <button 
          className='bg-white rounded text-black px-5 py-2 outline-none'
          active:bg-gray-400
          >AddNotes</button>

      </form>
      <div className='lg:w-1/2 bg-gray-900 p-10 border-l-2'>
        <h1 className='text-3xl font-bold'>Recent notes</h1>
        <div className='flex flex-wrap gap-5 mt-10 h-[90%]'>
          {task.map(function(elem,idx){
            return <div key={idx} className="h-52 w-40 rounded-2xl bg-cover bg-[url('data:image/png;base64,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')] text-black p-4 flex flex-col justify-between ">
              <div>
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='bg-red-500 rounded w-full text-white font-bold cursor-pointer active:scale-95'>Delete</button>
            </div>
          })}
          
        </div>
      </div>
    </div>
  )
}

export default App