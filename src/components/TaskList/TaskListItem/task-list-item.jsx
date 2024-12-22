import { useState } from "react"
import { Button, BUTTON_TYPE, TextField } from "../../../components/"
import { useAppContext } from "../../../hooks"
import style from "./task-list-item.module.css"

const TaskListItem = (props) => {
  const { id, nome } = props
  const { removeTask, updateTask } = useAppContext()

  const [isEditing, setIsEditing] = useState(false)

  return (
    <li className={style.TaskListItem}>
      {isEditing ? (
        <TextField
          type="text"
          defaultValue={nome}
          onChange={(event) => updateTask(id, event.target.value)}
          onBlur={() => setIsEditing(false)}
          autoFocus
        />
      ) : (
        <span onDoubleClick={() => setIsEditing(true)}>{nome}</span>
      )}
      <Button
        type="button"
        text="-"
        variant={BUTTON_TYPE.SECONDARY}
        onClick={() => removeTask(id)}
      />
    </li>
  )
}

export { TaskListItem }
