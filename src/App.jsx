import "./App.css"
import { Content, Footer, Header } from "./components/"

const App = () => {
  return (
    <>
      <Header />
      <Content>
        <h1>Titulo</h1>
        <p>Texto</p>
      </Content>
      <Footer projectDeveloper="Ebbecke" />
    </>
  )
}

export { App }
