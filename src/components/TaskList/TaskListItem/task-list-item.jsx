import { Button, BUTTON_TYPE } from "../../Button"
import style from "./task-list-item.module.css"

const TaskListItem = (props) => {
  const { nome } = props
  return (
    <li className={style.TaskListItem}>
      {nome} <Button text="-" variant={BUTTON_TYPE.SECONDARY} />
    </li>
  )
}

export { TaskListItem }
