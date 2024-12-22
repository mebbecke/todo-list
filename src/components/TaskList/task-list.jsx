import { useAppContext } from "../../hooks/"
import style from "./task-list.module.css"
import { TaskListItem } from "./TaskListItem/task-list-item"

const TaskList = () => {
  const { tasks } = useAppContext()

  return (
    <ul className={style.TaskList}>
      {!tasks.length && <p>Nenhuma tarefa cadastrada</p>}
      {tasks.map((task) => (
        <TaskListItem key={task.id} id={task.id} nome={task.nome} />
      ))}
    </ul>
  )
}

export { TaskList }
