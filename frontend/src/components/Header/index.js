
import { AiOutlineHome } from "react-icons/ai"
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";

import "./index.css"

const Header = () => {
  return (
    <div className="header-container">
    <h1 className = "header-title">Chat / Feed chat</h1>
    <ul className="ul-container-header">
    <li className="list-item-header">
      <AiOutlineHome size = "20"/>
      <button className="owner-btn">Process Owner HOD</button>
    </li>
    <li className="list-item-header">
      <button className="admin-btn">Admin</button>
      <p className="header-title">Palak Bansal</p>
      <img alt = "profile"
      src = "https://res.cloudinary.com/dieu9paow/image/upload/v1733035544/Ellipse_3855_xhf6j8.png" className="header-profile"/>
     <button className="plane-btn">
     <IoSettingsOutline size = "20"/>
     </button>
    <button className="logout-btn">
    <LuLogOut size = "20" />
     Logout
    </button>
    </li>
    </ul>
    </div>
  )
}

export default Header

/*<li className="list-flex-row-container">
       <AiOutlineHome size = {20} /> 
       <button className="owner-btn">Process Owner HOD</button>
       
       </li> */