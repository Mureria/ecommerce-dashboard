import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import Header from "./Header"

function Layout() {
  return (
    <>
      <div className="flex gap-2 bg-black/90 h-full w-full ">
        <div><Sidebar/></div>
        <div className="mx-auto md:ml-60 ">
          <div><Header/></div>
          <div>{<Outlet/>}</div>
          <div><Footer/></div>
        </div>
      </div>
    </>
  
  )
}

export default Layout