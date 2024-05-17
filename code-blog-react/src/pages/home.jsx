import logo1 from "../assets/images/logo1.png"
// import logo1 from "../assets/images/logo1.png"
// import "../assets/style/home.css"
import blog1 from "../assets/images/blog1.webp"
import Navbar from "../components/navbar"
import HomeBody from "../components/homeBody"
function Home() {

  return (
    <>
    {/* <div>This is home</div> */}
      <Navbar/>
      <HomeBody />
      {/* <div>After navbar</div> */}
    </>
  )
}

export default Home
