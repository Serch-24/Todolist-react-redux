import { Routes, Route } from "react-router-dom"
import { MainTasks } from "./components/crud/MainTasks/MainTasks"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faTrash, faPenToSquare} from "@fortawesome/free-solid-svg-icons"

function App() {

  return (
    <>
      <header className="header-task--container">
        <h1 className="header-task--title">
          To Do List
        </h1>
      </header>
      <Routes>
        <Route path="/" element={<MainTasks/>}/>
      </Routes>
    </>
  )
}
library.add(faTrash, faPenToSquare)

export default App