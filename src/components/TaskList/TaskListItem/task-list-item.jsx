import { useState } from "react"
import { Button, BUTTON_TYPE, TextField } from "../../../components/"
import { useAppContext } from "../../../hooks"
import style from "./task-list-item.module.css"

const TaskListItem = (props) => {
  const { id, name } = props
  const { removeTask, updateTask, removeLoading, updateLoading } =
    useAppContext()

  const [isEditing, setIsEditing] = useState(false)

  const handleUpdateTask = (event) => {
    const newTaskName = event.target.value
    updateTask(id, newTaskName)
    setIsEditing(false)
  }

  const isRemoveLoading = removeLoading === id
  const isUpdateLoading = updateLoading === id

  return (
    <li className={style.TaskListItem}>
      {(isEditing || isUpdateLoading) && (
        <TextField
          type="text"
          defaultValue={name}
          onBlur={handleUpdateTask}
          autoFocus
        />
      )}

      {!isUpdateLoading && !isEditing && (
        <span onDoubleClick={() => setIsEditing(true)}>{name}</span>
      )}

      {isUpdateLoading && <span>...</span>}

      <Button
        type="button"
        text={isRemoveLoading ? "..." : "-"}
        variant={BUTTON_TYPE.SECONDARY}
        onClick={() => removeTask(id)}
      />
    </li>
  )
}

export { TaskListItem }
