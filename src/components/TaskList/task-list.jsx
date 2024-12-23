import { useAppContext } from "../../hooks/"
import style from "./task-list.module.css"
import { TaskListItem } from "./TaskListItem/task-list-item"

const TaskList = () => {
  const { tasks, getLoading } = useAppContext()

  return (
    <ul className={style.TaskList}>
      {getLoading && <p>Carregando...</p>}

      {!getLoading && !tasks.length && <p>Nenhuma tarefa cadastrada</p>}

      {tasks.map((task) => (
        <TaskListItem key={task.id} id={task.id} name={task.name} />
      ))}
    </ul>
  )
}

export { TaskList }
