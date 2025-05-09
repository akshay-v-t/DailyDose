import React from 'react'
import MedicationList from '../features/medications/MedicationList'
import MedicationCard from '../components/MedicationCard'

const Dashboard = () => {
  return (
    <div>

      <MedicationList/>
      <MedicationCard/>
    </div>
  )
}

export default Dashboard