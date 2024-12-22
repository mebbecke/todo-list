import style from "./task-list.module.css"
import { TaskListItem } from "./TaskListItem/task-list-item"

const TaskList = () => {
  const tasks = [
    { id: 1, nome: "Tarefa 1" },
    { id: 2, nome: "Tarefa 2" },
    { id: 3, nome: "Tarefa 3" },
  ]
  return (
    <ul className={style.TaskList}>
      {tasks.map((task) => (
        <TaskListItem key={task.id} nome={task.nome} />
      ))}
    </ul>
  )
}

export { TaskList }
