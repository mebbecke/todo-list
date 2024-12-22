import style from "./button.module.css"
import { BUTTON_TYPE } from "./constants"

const Button = (props) => {
  const { text, variant = BUTTON_TYPE.PRIMARY, ...otherProps } = props
  return (
    <button className={style.Button} variant={variant} {...otherProps}>
      {text}
    </button>
  )
}

export { Button }
