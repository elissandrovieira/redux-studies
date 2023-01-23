import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_TASK, REMOVE_TASK } from './store'

function App() {
  const [inputTask, setInputTask] = useState()

  const tasks = useSelector(state => state.data)
  const dispatch = useDispatch()

  const handleInput = e => {
    setInputTask(e.target.value)
  }

  const handleSubmit = () => {
    dispatch( ADD_TASK(inputTask))
    setInputTask('3')
  }

  const handleRemove = e => {
    dispatch( REMOVE_TASK(e))
    
  }

  return (
    <>
      <ul>
        {
          tasks.map(task =>
              <li key={task}>
                {task} <button onClick={() => handleRemove(task)}>X</button>
              </li>
            )
        }
      </ul>
      <input type="text" onChange={handleInput} />
      <button onClick={handleSubmit}>ADD TASK</button>
    </>
  )
}

export default App
