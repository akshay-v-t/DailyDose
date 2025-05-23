import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMedication, toggleTaken } from '../features/medications/medicationsSlice';

const MedicationCard = () => {

    const medications = useSelector((state)=>state.medications.list);
    const dispatch = useDispatch();

    const handleDelete =(id)=>{
        if(window.confirm("Are you sure you want to delete this medicine ? ")){
            dispatch(deleteMedication(id))
        }
    }
    

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">

        {
            medications.map((med,index)=>{
              return   <div key={index} className= {med.taken ? 'bg-gray-800 p-6 rounded w-full drop-shadow-xl border-blue-950 border-1 flex gap-2 flex-col'  : 'bg-gray-900 p-6 rounded w-full drop-shadow-xl border-blue-950 border-1 flex gap-2 flex-col  '}>
             
             
             <div className='flex justify-between items-center'>
             <p className={med.taken ? 'font-medium text-lg tracking-wider mb-2 line-through text-gray-600'  : 'font-medium text-lg tracking-wider mb-2' } >{med.name}</p> 
             <p className='bg-green-800 rounded px-2 w-fit text-sm'> {med.dietaryInstructions ?  med.dietaryInstructions : ''} </p>



             </div>
             
             
              
              <div className='flex justify-between  border-blue-950 border p-4'>
              <p>{med.frequency}</p>
              <p>{med.dietaryInstructions}</p> </div>
              
              <div className='flex justify-between  border-blue-950 border p-4'> 
               <div>
                   <p className='text-xs'>From</p>
                   <p>{med.startDate}</p>
               </div>
               <div>
                   <p className='text-xs'>Till</p>
                   <p>{med.endDate}</p>
               </div>
               
               
               
              
   
             </div>

             <div className='gap-2 flex'>
                
                <button onClick={()=>dispatch(toggleTaken(med.id))} className='bg-blue-800 rounded px-4 pb-1 mt-4 text-sm cursor-pointer w-[50%]' > {med.taken ? 'Taken' : 'Mark Taken' } </button>

                <button onClick={()=>handleDelete(med.id)} className='bg-orange-900 rounded px-4 pb-1 mt-4 cursor-pointer w-[50%]'>Delete</button>
             
             
             </div>
             
              
              <p className='text-xs text-center' >Next medication in : 2 hours</p>
           </div>
            })
        }


       





    </div>
  )
}

export default MedicationCard