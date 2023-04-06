import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TodoBox from "./Components/TodoBox"
import Button from "./Components/Button"

function App() {
  const [taskList, setTaskList] = useState([])
  const [newTaskInput, setNewTask] = useState("")
  return (
    <div className="App">
      <TodoBox newTaskInput={newTaskInput} setNewTask={setNewTask}  />
      <Button taskList={taskList} setTaskList={setTaskList} newTaskInput={newTaskInput}/>
      {console.log(taskList)}
    </div>
  )
}

export default App
