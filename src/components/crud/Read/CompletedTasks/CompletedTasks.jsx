import { TaskList } from "../TaskList"

export const CompletedTasks = () => {
  
  return (
    <section className="completedtasks-container">
      <TaskList title= "Completed" filter= {true} />      
    </section>
  )
}
