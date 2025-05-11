import React from 'react'
import MedicationForm from '../features/medications/MedicationForm'
import MedicationList from '../features/medications/MedicationList'
import { NavLink, Outlet } from 'react-router-dom'
import Dashboard from './Dashboard'
import CardGrid from '../components/CardGrid'
import SideBar from '../components/SideBar'
import CurrentTime from '../components/CurrentTime'

const HomePage = () => {
  return (
    

        
<div className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-950 to-black relative overflow-hidden text-white p-2 ">
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)] pointer-events-none"></div>

  <div className="relative z-10 box-border border-blue-950 border-2 rounded-xl p-4 min-h-screen" >

    <div className='flex justify-between pb-4'>
    <h1 className='text-2xl font-medium '>DailyDose</h1> <CurrentTime/> <MedicationForm/> 

    </div>
  

  <div className='flex  gap-2'>

    

  <div className='w-[20%] min-h-screen  border-blue-950 border-2 rounded-xl p-5 '>
 

 <SideBar/>


</div>

<div className=' w-[80%] border-blue-950 border-2 rounded-xl p-5 '>
<main className='flex-1 pt-4'>

<Outlet/>
</main>

</div>



  </div>

 
    
   
 
  </div>



      
        
 

    </div>
  )
}

export default HomePage