import { TaskList } from "../TaskList"

export const PendingTasks = () => {

  return (
    <section className="completedtasks-container">
      <TaskList title= "Pending" filter= {false} />      
    </section>
  )
}