import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts/"
import { About, ErrorPage, Home } from "./pages/"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export { Router }
