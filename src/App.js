import { useState } from 'react';
import { Form, SingleTask } from './components';


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = newTask => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (taskId, newTask) => {
    const updateTasks = tasks.map((task) => task.id === taskId ? { ...task, text: newTask } : task)
    setTasks(updateTasks)
  }

  return (
    <main className="w-full min-h-[100vh] bg-gradient-to-r from-cyan-400 to-blue-400 pt-16 px-4 lg:px-0">
      <div className="bg-white shadow-xl px-4 pt-8 pb-4 max-w-[600px] mx-auto rounded-xl ">
        <h1 className="text-center font-bold text-2xl md:text-3xl">Todo-list</h1>
        <Form addTask={addTask} />
        <SingleTask tasks={tasks} updateTask={updateTask} />
      </div>
    </main>
  );
}

export default App;
