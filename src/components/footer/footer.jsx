import style from "./footer.module.css"

const Footer = (props) => {
  const { projectDeveloper } = props
  const currentYear = new Date().getFullYear()
  return (
    <div className={style.footer}>
      <p>
        React básico - {currentYear} - {projectDeveloper}
      </p>
    </div>
  )
}

export { Footer }
