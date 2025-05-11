import React from 'react'
import MedicationList from '../features/medications/MedicationList'
import MedicationCard from '../components/MedicationCard'
import UpcomingMedCard from '../components/UpcomingMedCard'

const Dashboard = () => {
  return (
    <div >

      <h1 className='text-2xl mb-5 '>Upcoming Meds</h1>

      <UpcomingMedCard/>
     
    </div>
  )
}

export default Dashboard