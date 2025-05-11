
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMedication, toggleTaken } from '../features/medications/medicationsSlice';

const UpcomingMedCard = () => {

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
             
             
              
              <div className='flex justify-between text-sm'>
              <p>Duration : { (new Date(med.endDate)- new Date(med.startDate))/(1000*60*60*24)} days </p>
             
            </div>
              
              <div className='flex justify-between text-sm'> 
              <p>{med.startDate}</p> -
               
                  
               <p>{med.endDate}</p>

               
               
               
              
   
             </div>

             <hr className='bg-red-500' />

             <div>
             <div>
                <p>Today's Doses</p>
                <div className='flex gap-2'>

                  <label htmlFor="morning" className='flex items-center gap-1'> 

                  <input type="checkbox" name='morning' /> Morning


                  </label>

                  <div className='flex items-center gap-1'>
                  

                  </div>
                  <div className='flex items-center gap-1'>
                  <input type="checkbox" /> Afternoon

                  </div>
                  <div className='flex items-center gap-1'>
                  <input type="checkbox" /> Evening

                  </div>

                 



                </div>
               </div>

               <div className='flex-col items-cente mt-5'>

               <p>1/3 Taken</p>

               <div class="bg-blue-600 h-2  dark:bg-green-500 mt-1" style={{width: '54%'}}></div> 
               



               </div>

               



           


             </div>

             <div className='gap-2 flex'>
                
                <button onClick={()=>dispatch(toggleTaken(med.id))} className='bg-blue-800 rounded px-4 pb-1 mt-4 text-sm cursor-pointer w-[50%]' > {med.taken ? 'Taken' : 'Mark Taken' } </button>

                <button onClick={()=>handleDelete(med.id)} className='bg-orange-900 rounded px-4 pb-1 mt-4 cursor-pointer w-[50%]'>Delete</button>
             
             
             </div>
             
              
            
              <p className='text-xs text-center' >  {new Date(med.startDate) <  new Date() ? <p> {Math.ceil((new Date(med.endDate)- new Date())/(1000*60*60*24))} days remaining  </p> : 'Not Started Yet' } </p>
           </div>
            })
        }


       





    </div>
  )
}

export default UpcomingMedCard