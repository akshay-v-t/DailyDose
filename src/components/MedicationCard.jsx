import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MedicationCard = () => {

    const medications = useSelector((state)=>state.medications.list);
    const dispatch = useDispatch();

  return (
    <div>

        {
            medications.map((med,index)=>{
              return  <li key={index}>

                <p>{med.name}</p>
                <p>{med.dosage.amount} - {med.dosage.unit}</p> 
                <p>{med.dosage.amount}</p>
              </li>
            })
        }


        <div className='bg-gray-900 p-6 rounded w-fit drop-shadow-xl border-blue-950 border-1'>
           <p className='font-medium text-lg tracking-wider'>Paracetamol 650 mg</p> 
           <p>3 times a day</p>
           <p>12-11-2024</p>
           <p>18-11-2024</p>
           <p>After Food</p>
           <p>Next medication in : 2 hours</p>
        </div>





    </div>
  )
}

export default MedicationCard