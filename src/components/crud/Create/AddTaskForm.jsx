import { useState } from "react"
import { PRIORITIES } from "../../../constants/tasksPriorities"
import { addTask } from "../../../Stores/tasksStore/taskSlice"
import { useDispatch } from "react-redux"
import uniqid from "uniqid"
import "./AddTaskFormStyles.scss"

export const AddTaskForm = () => {

  //dispatcher for use reducers
  const dispatch = useDispatch()

  //initial state from task
  const [task, setTask] = useState({
    title: "",
    priority: "",
    completed: false,
    edit: false
  })

  //handlers
  const handleChange = e=>{
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(addTask({
      ...task,
      id: uniqid()
    }))
  
    setTask({
      title: "",
      priority: "",
      completed: false,
      edit: false
    })
  }

  return (
    <section className="addtask-form--container">
        <h1 className="addtask-form--title">Add Tasks</h1>
        <form onSubmit={handleSubmit} className="addtask-form--form">

              <input type="text"
                placeholder="Title"
                name="title"
                id="title"
                value={task.title}
                onChange={handleChange} 
                required
                className="addtask-form--form-titleinput"/>

              <select name="priority" 
              id="priorities"
              value={task.priority}
              onChange={handleChange} 
              required
              className="addtask-form--form-priorityinput">

                <option value="">
                  Priority
                </option>

                {
                  Object.entries(PRIORITIES).map(([key, value])=>(
                    <option
                    key={value}
                    value={key}
                    className={key}>
                      {key}
                    </option>
                  ))
                }
              </select>

              <button className="addtask-form--form-submit">
                Save
              </button>
        </form>
    </section>
  )
}
