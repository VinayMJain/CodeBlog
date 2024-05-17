import Home from "./pages/home"
// import 
import Navbar from "./components/navbar"
import { Route, Routes } from "react-router-dom"
import "./assets/style/root.css"
function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      {/* <Home /> */}
    {/* <Home /> */}
    </>
  )
}

export default App
