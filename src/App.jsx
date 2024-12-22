import "./App.css"
import { Content, Footer, Header } from "./components/"
import { Home } from "./pages/"

const App = () => {
  return (
    <>
      <Header />
      <Content>
        <Home />
      </Content>
      <Footer projectDeveloper="Ebbecke" />
    </>
  )
}

export { App }
