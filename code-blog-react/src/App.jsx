import Home from "./pages/home"
import Login from "./components/login"
import Signup from "./components/signup"
import Upload from "./components/upload"
// import 
import Navbar from "./components/navbar"
import { Route, Routes } from "react-router-dom"
import "./assets/style/root.css"
function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/uploads" element={<Upload />}/>
      </Routes>
      {/* <Home /> */}
    {/* <Home /> */}
    </>
  )
}

export default App
