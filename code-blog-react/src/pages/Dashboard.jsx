import logo1 from "../assets/images/logo1.png"
// import logo1 from "../assets/images/logo1.png"
// import "../assets/style/home.css"
import blog1 from "../assets/images/blog1.webp"
import Navbar from "../components/Navbar"
import DashboardBody from "../components/DashboardBody"
function Dashboard() {

  return (
    <>
    {/* <div>This is home</div> */}
      <Navbar/>
      <DashboardBody />
      {/* <div>After navbar</div> */}
    </>
  )
}

export default Dashboard
