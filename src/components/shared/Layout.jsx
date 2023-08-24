import { Outlet } from "react-router-dom"
import Footer from "../Footer"
import Sidebar from "./Sidebar"
import Header from "./Header"

function Layout() {
  return (
    <>
      <div className="flex gap-10 overflow-hidden bg-black/90 h-screen w-screen">
        <div><Sidebar/></div>
        <div className="p-4">
          <div><Header/></div>
          <div>{<Outlet/>}</div>
          <Footer/>
        </div>
      </div>
    </>
  
  )
}

export default Layout