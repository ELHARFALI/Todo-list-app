import { useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { v4 as uuid } from 'uuid';

const Form = ({addTask}) => {
    const [taskText, setTaskText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const unique_id = uuid();
        const small_id = unique_id.slice(0, 8)
        const newTask = {
            id: small_id,
            text: taskText,
            edit: false,
        }
        addTask(newTask)
        setTaskText('')
    }
    
    

  return (
    <form onSubmit={handleSubmit} className="my-8">
        <div className='flex h-full'>
              <input
                  type="text"
                  name="text"
                  value={taskText}
                  onChange={e => setTaskText(e.target.value)}
                  placeholder='Add a task...'
                  className=" bg-cyan-100 h-[52px] w-full rounded-tl-lg rounded-bl-lg focus:outline-none pl-4 pr-2 text-xl  text-bold placeholder:text-black placeholder:text-xl " />
        <button type="submit" className="p-4 text-xl bg-purple-500 text-white rounded-tr-lg rounded-br-lg transition-all ease-in-out duration-200 hover:bg-purple-600">
            <BsPlusLg />
        </button>
        </div>
    </form>
  )
}

export default Form