import {BsPlusLg} from 'react-icons/bs'
import { useTodoContext } from '../context/todo_app_context'

const Form = () => {
    const {handleSubmit} = useTodoContext()

  return (
    <form onSubmit={handleSubmit} className="my-8">
        <div className='flex h-full'>
        <input type="text" name="text" placeholder='Add a task...' className=" bg-cyan-100 h-[52px] w-full rounded-tl-lg rounded-bl-lg focus:outline-none pl-4 pr-2 text-xl  text-bold placeholder:text-black placeholder:text-xl " />
        <button type="submit" className="p-4 text-xl bg-purple-500 text-white rounded-tr-lg rounded-br-lg transition-all ease-in-out duration-200 hover:bg-purple-600">
            <BsPlusLg />
        </button>
        </div>
    </form>
  )
}

export default Form