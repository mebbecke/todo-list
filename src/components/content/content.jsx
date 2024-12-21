import style from "./content.module.css"

const Content = (props) => {
  const { children } = props
  return <div className={style.content}>{children}</div>
}

export { Content }
