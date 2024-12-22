import { Button, TextField } from "../../components"
import style from "./create-task-form.module.css"

const CreateTaskForm = () => {
  return (
    <form className={style.CreateTaskForm}>
      <TextField />
      <Button text="+" />
    </form>
  )
}

export { CreateTaskForm }
