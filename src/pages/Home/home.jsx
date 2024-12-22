import { CreateTaskForm, TaskList } from "../../components/"
import style from "./home.module.css"

const Home = () => {
  return (
    <div className={style.Home}>
      <CreateTaskForm />
      <TaskList />
    </div>
  )
}

export { Home }
