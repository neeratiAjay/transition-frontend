import { CiLocationOn } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";
import { BiSolidPieChart } from "react-icons/bi"
import { HiOutlineUserPlus } from "react-icons/hi2";

import "./index.css"

const UserDetails = () => {
  return (
    <div className="user-details-container">
    <div className="content-circle-container">
    <div className="content-circle">
    <p className="circle-text">CB</p>
    </div>
    <div className="circle-column-container">
    <h1 className="circle-heading">Hannibal Smith</h1>
    <div className="flex-row">
        <p className="circle-para"> <CiLocationOn size={14} color="#676B89"/> 1 Market Street San Francisco, CA 94105</p>
    </div>
    </div>
    </div>
    <ul className="user-name-ul-container">

     <li className="user-list-item">
     <p className="content-user-name">Customer ID</p>
     <p className="content-user-value">12345</p>
     <BsThreeDotsVertical size = "20"/>
     </li>
     <hr className="line"/>
     <li className="user-list-item">
     <p className="content-user-name">Email Address</p>
     <p className="content-user-value">rachel@sample.com</p>
     <BsThreeDotsVertical size = "20"/>
     </li>
     <hr className="line"/>

     <li className="user-list-item">
     <p className="content-user-name">Phone Number</p>
     <p className="content-user-value">8051298905</p>
     <BsThreeDotsVertical size = "20"/>
     </li>
     <li className="add-user-container">
        <div className="flex-row">
        <FiPlusCircle size={20} color="#0A061A"/>
        <p className="add-text"> Add</p>
        </div>

     </li>
    </ul>

    
    <ul className="user-name-ul-container margin-top">

     <li className="user-list-item">
     <p className="content-user-name">Loyalty Tier</p>
     <p className="content-user-value">Silver</p>
     <BsThreeDotsVertical size = "20"/>
     </li>
     <hr className="line"/>

     <li className="user-list-item">
     <p className="content-user-name">Segment</p>
     <p className="content-user-value">Sleepy Customer</p>
     <BsThreeDotsVertical size = "20"/>
     </li>
     <li className="add-user-container">
        <div className="flex-row">
        <FiPlusCircle size={20} color="#0A061A"/>
        <p className="add-text"> Add</p>
        </div>

     </li>
    </ul> 

    <ul className="user-name-ul-container margin-top">

     <li className="user-list-item">
     <p className="content-user-name">Lifetime Value</p>
     <p className="content-user-value">$ 1M</p>
     <BsThreeDotsVertical size = "20"/>
     </li>
     <hr className="line"/>

     <li className="user-list-item">
     <p className="content-user-name">Propensity to Purchase</p>
     <div className="flex-row">
     <BiSolidPieChart size = "20" color="D7AF48"/>
     <p className="content-user-value yellow-color">75%</p>
     </div>
     <BsThreeDotsVertical size = "20"/>  
     </li>
     <li className="add-user-container">
        <div className="flex-row">
        <FiPlusCircle size={20} color="#0A061A"/>
        <p className="add-text"> Add</p>
        </div>

     </li>
    </ul>

    <ul className="user-name-ul-container margin-top">
    <li className="user-list-item">
     <p className="content-user-name">Engagement Score</p>
     <div className="flex-row">
     <BiSolidPieChart size = "20" color="48D756"/>
     <p className="content-user-value green-color">85%</p>
     </div>
     <BsThreeDotsVertical size = "20"/>  
     </li>
     <li className="add-user-container">
        <div className="flex-row">
        <FiPlusCircle size={20} color="#0A061A"/>
        <p className="add-text"> Add</p>
        </div>

     </li>
    </ul>

    <div className="add-user-btn-container">
      <div className="add-agent-container">
       <HiOutlineUserPlus size={20} color="#ffffff"/>
       <p className="add-agent-text">Assign other Agent</p>
      </div>
      <button className="add-widget-btn">
      Add New Widget
      </button>
    </div>
    
    </div>
  )
}

export default UserDetails