import React from 'react'

const Prescriptions = () => {
  return (
    <div>
      <h1>Prescriptions</h1>
      <label htmlFor="prescription">Upload A Prescription here </label>
      <input type="file" name="prescription"/>
    </div>
  )
}

export default Prescriptions