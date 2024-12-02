import { AiOutlineFileSearch } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { FaLink } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { FcFlowChart } from "react-icons/fc";
import { LuUser } from "react-icons/lu";
import { LuBox } from "react-icons/lu";
import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { FiTool } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { FaGift } from "react-icons/fa"

import "./index.css"

const Navbar = () => {
  return (
    <nav className = "nav-container">
      <img src = "https://res.cloudinary.com/dieu9paow/image/upload/v1733037030/riskhawk-logo_1_tbuuwj.png"
      alt = "logo" className = "nav-logo"/>
      <ul className = "ul-container-nav">
        <li className = "nav-list-item">
        <AiOutlineFileSearch size = "30" color=" #9EA0B3"/>
        <p className="nav-text">Internal Audit</p>
        <MdOutlineKeyboardArrowRight size = "30" color="#9EA0B3"/>
        </li>
        <li className = "nav-list-item">
        <AiOutlineFileDone size = "30" color=" #9EA0B3"/>
        <p className="nav-text">UAT Testing</p>
       
        </li>
        <li className = "nav-list-item">

         <FaLink size = "30" color=" #9EA0B3"/>
        <p className="nav-text">Intract</p>
        <MdOutlineKeyboardArrowRight size = "30" color="#9EA0B3"/>
        </li>
        <li className = "nav-list-item">
        <BsPeopleFill size = "30" color=" #FFFFFF"/>
        <p className="nav-text active">Queue</p>
        
        </li>
        <li className = "nav-list-item">
        <FcFlowChart size = "30" color=" #9EA0B3"/>
        <p className="nav-text">Workflow</p>
        
        </li>
        <li className = "nav-list-item">
        <LuUser size = "30" color=" #9EA0B3"/>
        <p className="nav-text">Admin</p>
       
        </li>
        <li className = "nav-list-item">
        <LuBox size = "30" color=" #9EA0B3"/>
        <p className="nav-text">Asset</p>
       
        </li>
        <li className = "nav-list-item">
        <BsPeopleFill size = "30" color=" #9EA0B3"/>
        <p className="nav-text">Parent</p>
       
        </li>
        < li className = "nav-list-item">
        < TbCircleNumber1 size = "30" color=" #9EA0B3"/>
        <p className="nav-text">Option One</p>
       
        </li>
        < li className = "nav-list-item">
        < TbCircleNumber2 size = "30" color=" #9EA0B3"/>
        <p className="nav-text">Option Two</p>
       
        </li>
        <li className = "nav-list-item">
        <FiTool size = "30" color=" #9EA0B3"/>
        <p className="nav-text">All Accessories</p>
        
        </li>
        <li className = "nav-list-item">
        <AiOutlineFileSearch size = "30" color=" #9EA0B3"/>
        <p className="nav-text">Internal Audit</p>
        <MdOutlineKeyboardArrowRight size = "30" color="#9EA0B3"/>
        </li>
        <li className = "nav-list-item">
        <BsStars size = "30" color=" #9EA0B3"/>
        <p className="nav-text">Decorating</p>
        <MdOutlineKeyboardArrowRight size = "30" color="#9EA0B3"/>
        </li>
        <li className = "nav-list-item">
        <FaGift size = "30" color=" #9EA0B3"/>
        <p className="nav-text">Presenting</p>
       
        </li>
      </ul>
    </nav>
  )
}

export default Navbar