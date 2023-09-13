import { PendingTasks } from "./PendingTasks/PendingTasks"
import { CompletedTasks } from "./CompletedTasks/CompletedTasks"
import "./TasksListsStyles.scss"

export const TaskList = () => {
  return (
    <section className="tasklist--main-container">
      <PendingTasks/>
      <CompletedTasks/>
    </section>
  )
}