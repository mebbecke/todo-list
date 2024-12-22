import style from "./error-page.module.css"

const ErrorPage = () => {
  return (
    <div className={style.ErrorPage}>
      <h1>404</h1>
      <p>Página não encontrada</p>
    </div>
  )
}

export { ErrorPage }
