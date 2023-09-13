import { TaskList } from "../Read/TaskListMain"
import { AddTaskForm } from "../Create/AddTaskForm"
import "./MainTasksStyles.scss"


export const MainTasks = () => {

  return (
    <section className="maintasks-container">
      <AddTaskForm/>
      <TaskList/>
    </section>
  )
}
