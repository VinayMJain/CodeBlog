import Login from "./components/Login"
import Signup from "./components/Signup"
import Upload from "./components/Upload"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import "./assets/style/Root.css"

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
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
