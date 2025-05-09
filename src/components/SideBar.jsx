import React from 'react'
import { NavLink } from 'react-router-dom'
import navLinkClass from '../utils/ActiveNavlink'

const SideBar = () => {
  return (
    <nav className=" text-white ">
      <ul className="space-y-2 ">
        <li><NavLink className={navLinkClass}  to="/">Dashboard</NavLink></li>
        <li><NavLink className={navLinkClass} to="/settings">Settings</NavLink></li>
        <li><NavLink className={navLinkClass} to="/my-health">My Health</NavLink></li>
       
      </ul>
    </nav>
  )
}

export default SideBar