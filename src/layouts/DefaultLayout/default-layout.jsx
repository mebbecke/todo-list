import { Outlet } from "react-router-dom"
import { Content, Footer, Header } from "../../components"
import { useAppContext } from "../../hooks/"

const DefaultLayout = () => {
  const { developer } = useAppContext()
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer projectDeveloper={developer} />
    </>
  )
}

export { DefaultLayout }
