import {AiFillDelete} from 'react-icons/ai'
import {BiEdit} from 'react-icons/bi'

const SingleTask = ({tasks}) => {

  return (
      <>
          {tasks.map((task) => {
              const { id, text } = task
              return (
                <div key={id} className='w-full px-4 py-3 bg-gray-200 rounded-lg flex justify-between items-center mb-3'>
                <form className='flex items-center'>
                    <input type="checkbox" name="check" className='cursor-pointer'  />
                          <p className='ml-2 text-xl font-medium cursor-pointer'>{text}</p>
                </form>
                <div className='flex items-center'>
                    <button type='button' className='p-2 text-2xl text-white bg-green-500 rounded-lg transition-all ease-in-out duration-200 hover:bg-green-600'><BiEdit /></button>
                    <button type='button' className='p-2 text-2xl text-white bg-red-500 rounded-lg ml-2 transition-all ease-in-out duration-200 hover:bg-red-600 '><AiFillDelete/></button>
                </div>
              </div>
              )
        })}
      </>
  )
}

export default SingleTask