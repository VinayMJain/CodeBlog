import Login from "./components/login"
import Signup from "./components/signup"
import Upload from "./components/upload"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/home"
import "./assets/style/overall.css"
// import "./assets/style/Dashboard.css"
import "./assets/style/root.css"
import Card from "./components/card"
// import ""

function App() {

  return (
  
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/uploads" element={<Upload />}/>
        <Route path="/card" element={<Card />}/>
      </Routes>


  )
}

export default App
