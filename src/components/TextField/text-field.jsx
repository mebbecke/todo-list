import style from "./text-field.module.css"

const TextField = (props) => {
  return <input type="text" className={style.TextField} {...props} />
}

export { TextField }
