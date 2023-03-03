import { useState } from 'react';
import { EditTask, Form, SingleTask } from './components';


function App() {
  const [tasks, setTasks] = useState([]);
  const [isEdit, setIsEdit] = useState(false)

  // add task
  const addTask = newTask => {
    setTasks([...tasks, newTask]);
  };

  // update task
  const updateTask = (id, text) => {
    const tempTask = tasks.find(task => task.id === id)
    console.log(tempTask);
  }

  // edit
  const editTask = (id) => {
    const editItem = tasks.find((task) => task.id === id)
    editItem.edit = true
  }

  // remove task
  const removeTask = (e, id) => {
    const value = e.target.value
    const tempTask = tasks.filter(task => task.id !== id)
    setTasks(tempTask, value)
  }


  return (
    <main className="w-full min-h-[100vh] relative bg-gradient-to-r from-cyan-400 to-blue-400 pt-16 px-4 lg:px-0">
      <div className="bg-white shadow-xl px-4 pt-8 pb-4 max-w-[600px] mx-auto rounded-xl ">
        <h1 className="text-center font-bold text-2xl md:text-3xl">Todo-list</h1>
        <Form addTask={addTask} />
        <SingleTask tasks={tasks} updateTask={updateTask} removeTask={removeTask} isEdit={isEdit} setIsEdit={setIsEdit} />
        {/* <EditTask /> */}
      </div>
    </main>
  );
}

export default App;
