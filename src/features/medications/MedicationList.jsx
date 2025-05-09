import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMedication, toggleTaken } from './medicationsSlice';

const MedicationList = () => {
  const medications = useSelector((state)=> state.medications.list);
  const dispatch = useDispatch();

  return (
    <>

    <ul className='space-y-2'>
      {
        medications.map((med)=> (

          <li key={med.id} className="flex justify-between items-center border p-3 rounded">

            <span className={med.taken? ' line-through text-gray-500' : ''}>{med.name}</span>

            <button onClick={()=> dispatch(toggleTaken(med.id))} className='border-2 p-2 rounded cursor-pointer hover:bg-green-500'>{med.taken ?  'Taken':'Mark Taken ' }</button>
            <button onClick={()=> dispatch(deleteMedication(med.id)) } className='cursor-pointer'>Delete</button>



          </li>
        ))
      }

    </ul>
    
    
    
    </>
  )
}

export default MedicationList