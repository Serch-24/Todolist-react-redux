/* eslint-disable react/prop-types */

//imports redux
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask, checkTask, showEditTask } from '../../../Stores/tasksStore/taskSlice'

//import alerts
import { deleteAlert, deleSuccessAlert } from '../alerts'

//import hooks
import { useState } from 'react'

//import edit component
import { EditTaskForm } from '../Update/EditTaskForm'

//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//import priorities
import { PRIORITIES } from '../../../constants/tasksPriorities'

//import animation components
import Confetti from "canvas-confetti"
import { CSSTransition, TransitionGroup } from 'react-transition-group';


export const TaskList = ({title, filter}) => {


  //tasks selected from store
  const tasks = useSelector(state => state.tasks)

  //dispatcher for use reducers
  const dispatch = useDispatch()

  //states to manage show/hide edit form
  const [showEditForm, setShowEditForm] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);


  //handlers

  //to delete
  const handleDelete = (id)=>{
    deleteAlert().then((result)=>{

      if (result.isConfirmed) {
        dispatch(deleteTask(id))
        deleSuccessAlert()
      }
    })
  }

  //to show edit form
  const handleShowEditForm = (id) => {
    dispatch(showEditTask({ id, edit: true }));
    setEditTaskId(id);
    setShowEditForm(true);
  }

  //to hide edit form
  const handleHideEditForm = () => {
    setShowEditForm(false);
    setEditTaskId(null);
  }

  //to check tasks
  const handleCheckedTask = (id) => {

    const task = tasks.find(task => task.id === id);

    if (!task.completed && task.priority === "High") {
      Confetti()
    }
    if (task) {
      dispatch(checkTask({ id, completed: !task.completed }));
    }
  }

  //order tasks by priority
  const sortedTasks = [...tasks].sort((taskA, taskB) => {

      const priorityA = PRIORITIES[taskB.priority];
      const priorityB = PRIORITIES[taskA.priority];

      return priorityB - priorityA;
  })

  

  return (
    <>
      <div className='pendingtasks--list-container'>
        <h2>
          {title} Tasks
        </h2>

        {tasks.filter((task)=> task.completed === filter).length === 0 ? (<p>No {title.toLowerCase()} tasks</p>) : ""}
        
        <ul>
          <TransitionGroup>
            {
              sortedTasks.filter((task)=> task.completed === filter).map(task =>(
                <CSSTransition key={task.id} timeout={300} classNames="task">
                  <div className='pendingtasks--list-task-container task'>
                    <li className={`${filter ? "completed" : task.priority}`}>

                      <div className='pendingtasks--list-task-title'>
                        <h3>
                          <input 
                          type="checkbox" 
                          name="mark_task" 
                          onChange={()=>{handleCheckedTask(task.id)}}
                          checked={task.completed}/>
                          <span 
                          className={task.completed ? "checked" : ""}
                          onClick={()=>{handleCheckedTask(task.id)}}>
                            {task.title}
                          </span>
                        </h3>
                      </div>

                      <div className='pendingtasks--list-task-actionbuttons'>
                        <button 
                        onClick={()=>{handleDelete(task.id)}}
                        className='deletebutton'>
                          <FontAwesomeIcon icon="fa-solid fa-trash" />
                        </button>
                        <button 
                        onClick={()=>{handleShowEditForm(task.id)}}
                        className='editbutton'>
                          <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                        </button>
                      </div>

                      <div className='pendingtasks--list-task-priority'>
                        <div>
                          <span>
                            Priority: <span className={filter ? "" : `priority-text-${task.priority}`}>{task.priority}</span>
                          </span>
                        </div>
                      </div>

                    </li>
                  </div>
                </CSSTransition>
              ))
            }
          </TransitionGroup>
        </ul>
      </div>
      {
      //show edit form component
      showEditForm && (
        <EditTaskForm
          id={editTaskId}
          onCancel={handleHideEditForm}
        />
      )}
    </>
  )
}
