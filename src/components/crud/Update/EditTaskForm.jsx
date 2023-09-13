/* eslint-disable react/prop-types */
import { useState } from "react"
import { PRIORITIES } from "../../../constants/tasksPriorities"
import { useDispatch, useSelector } from "react-redux"
import { editTask } from "../../../Stores/tasksStore/taskSlice"
import { updatedSuccess } from "../alerts"
import "./EditTaskStyles.scss"

export const EditTaskForm = ({ id, onCancel}) => {

  //tasks selected from store
  const tasks = useSelector(state => state.tasks) 

  //task found by id
  const taskFound = tasks.find(task => task.id === id)

  //copy from task found
  const [selectedTask, setSelectedTask] = useState({...taskFound})

  //dispatcher for use reducers
  const dispatch = useDispatch()

  //handlers

  //to edit copy task found
  const handleChangeEdit = e=>{
    setSelectedTask({
      ...selectedTask,
      [e.target.name]: e.target.value
    })
  }

  //to submit changes to store
  const handleSubmitEdit = (e)=>{
    e.preventDefault()
    
    //send copy to reducer
    dispatch(editTask({
      ...selectedTask,
      edit: false
    }))

    //reset copy of found task
    setSelectedTask({
      title: "",
      priority: ""
    })
    
    updatedSuccess()
    onCancel()
  }

  return (
    <>
          <section className="edittask-container">
            <div className="edittask-overlay"></div>
            <aside className="edittask-form-container">
              <div className="edittask-form-title">
                <h2>
                  Edit Task
                </h2>
              </div>
              <form onSubmit={handleSubmitEdit} className="edittask-form--container-form">

                  <div className="edittask-form-fields">
                    <input type="text"
                    className="edittask-form-fields-title" 
                    name="title"
                    value={selectedTask.title}
                    onChange={handleChangeEdit}
                    />

                    <select name="priority" 
                    value={selectedTask.priority}
                    onChange={handleChangeEdit}
                    className="edittask-form-fields-select">

                      <option value={selectedTask.priority}>{selectedTask.priority}</option>
                        {
                          Object.entries(PRIORITIES)
                          .filter(([key])=> key !== selectedTask.priority)
                          .map(([key, value])=>(
                            <option key={value} value={key}>
                              {key}
                            </option>
                          ))
                        }
                    </select>
                  </div>

                  <div className="edittask-form-actionbuttons">
                    <button className="edittask-form-actionbuttons-update">
                      Update
                    </button>
                    <button className="edittask-form-actionbuttons-cancel" onClick={onCancel}>
                      Cancel
                    </button>
                  </div>
                  
              </form>
            </aside>
          </section>
    </>
  )
}


