import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
const Layout = ()=>{
  return(
    <div className="container-fluid">
    <div className="row flex-nowrap">
      <Sidebar />
      <div className="col py-3">
        <Outlet />
      </div>
    </div>
  </div>
  )
}

export default Layout;