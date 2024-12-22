import { useState } from "react"
import { Button, TextField } from "../../components"
import { useAppContext } from "../../hooks/"
import style from "./create-task-form.module.css"

const CreateTaskForm = () => {
  const [taskName, setTaskName] = useState("")
  const { addTask } = useAppContext()

  const changeTaskName = (event) => {
    setTaskName(event.currentTarget.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()

    if (!taskName) return

    addTask(taskName)

    setTaskName("")
  }

  return (
    <form className={style.CreateTaskForm} onSubmit={onSubmit}>
      <TextField value={taskName} onChange={changeTaskName} />
      <Button text="+" />
    </form>
  )
}

export { CreateTaskForm }
