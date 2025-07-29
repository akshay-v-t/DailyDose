import React from 'react'
import { NavLink } from 'react-router-dom'
import navLinkClass from '../utils/ActiveNavlink'
import { ChartLine, CircleUserRound, Gauge, HeartPulse, NotepadText, Pill, Settings } from 'lucide-react'

const SideBar = () => {
  return (
    <nav className=" text-white ">
      <ul className="space-y-2 ">
        <li><NavLink className={navLinkClass}  to="/"><Gauge /> Dashboard</NavLink></li>
        <li><NavLink className={navLinkClass} to="/my-meds"><Pill/>My Meds</NavLink></li>
        <li><NavLink className={navLinkClass} to="/my-health"><HeartPulse />My Health</NavLink></li>    
        <li><NavLink className={navLinkClass} to="/prescriptions"><NotepadText />Prescriptions</NavLink></li>
        <li><NavLink className={navLinkClass} to="/analytics"><ChartLine />Analytics</NavLink></li>
        <li><NavLink className={navLinkClass} to="/account"><CircleUserRound />Account</NavLink></li>
        <li><NavLink className={navLinkClass} to="/settings"><Settings />Settings</NavLink></li>
       
      </ul>
    </nav>
  )
}

export default SideBar