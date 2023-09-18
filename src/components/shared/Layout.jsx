import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import Header from "./Header"

function Layout() {
  return (
    <>
      <div className="flex bg-black/90 h-full w-screen">
        <div><Sidebar/></div>
        <div className="p-4 md:ml-60 ">
          <div><Header/></div>
          <div>{<Outlet/>}</div>
          <div><Footer/></div>
        </div>
      </div>
    </>
  
  )
}

export default Layout