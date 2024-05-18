import logo1 from "../assets/images/logo1.png"
// import logo1 from "../assets/images/logo1.png"
// import "../assets/style/home.css"
import Navbar from "../components/navbar"
import DashboardBody from "../components/DashboardBody"
// import "../assets/style/"

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
