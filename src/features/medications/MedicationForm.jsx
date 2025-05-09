import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { addMedication } from './medicationsSlice';
import uniqid from 'uniqid';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

const MedicationForm = () => {

  const [isOpen, setIsOpen] = useState(false)
  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

    const {register, handleSubmit, reset } = useForm();

    const dispatch = useDispatch();

    const onSubmit = (data)=>{
        dispatch(addMedication({
            id:uniqid(),
            name:data.name,
            dosage:{
              amount: data.dosage.amount,
              unit: data.dosage.unit
              
            },
            frequency:data.frequency,
            startDate: data.startDate,
            endDate: data.endDate,
            timesOfDay: data.timesOfDay,
            dietaryInstructions: data.dietaryInstructions,
            reminder: data.reminder,
            taken:false,
        }));
        reset();
    }



  return (
    <>
   

<Button
  onClick={open}
  className="rounded-md bg-green-700 cursor-pointer px-4 py-2 text-sm font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-green-800 transition-all"
>
Add Medicine </Button>

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/80">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="h3" className="text-xl mb-4 font-medium text-white ">
                Medicine Details
              </DialogTitle>
              
              <div className='add-medicine-modal'>
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 mb-4'>


      {/* ---------------------- Medicine Name Start -----------------------   */}

      <div className='fl'>
        <label htmlFor="medicineName" className="block font-medium mb-1">Medicine Name</label>
        <input 
        type="text"
        name='medicineName'
        placeholder='Enter medicine name'
        className='border rounded px-3 py-2 w-full'
        {...register('name', {required:true})}
        />
      </div>

    


      {/* ---------------------- Medicine Name End -----------------------   */}


      {/* ---------------------- Dosage Start -----------------------   */}
        
    
<div>
<label htmlFor="dosage" className="block font-medium mb-1">Dosage</label>

<div className='flex gap-2 justify-between'>

  <div className='flex gap-4'>


<label htmlFor="quantity" className="block font-medium mb-1">Quantity : </label>

<input
     type='text'
     name='quantity'
     
     className='outline-0'

     {...register("dosage.amount")}
     
     />



</div>


<div className='flex gap-4 align-middle'>
<label htmlFor="dosage" className="block font-medium mb-1">Unit : </label>

     <select className='bg-[#191D28] outline-0'  {...register("dosage.unit")}>

      <option value="ml">ml</option>
      <option value="ml">mg</option>

      <option value="ml">tablet</option>

     

     </select>
</div>
</div>



</div>

 {/* ---------------------- Dosage End -----------------------   */}



 {/* ---------------------- Frequency Start -----------------------   */}

   <div className='flex gap-4 '>
   <label htmlFor="medicineName" className="block font-medium mb-1">Frequency : </label>
        <select name="frequency" id="" placeholder="frequency"
        {...register('frequency', {required:true})} className='bg-[#191D28]'>

        <option value="1 time/day">1 time/day</option>
        <option value="2 time/day">2 times/day</option>
        <option value="3 time/day">3 times/day</option>
        <option value="4 time/day">4 times/day</option>


     </select>

    
    </div> 

 {/* ---------------------- Frequency End -----------------------   */}


  {/* ---------------------- Dates Start -----------------------   */}

     <div className='flex gap-2'>

     <label htmlFor='startDate'>Start Date : </label>


<input type='date'

{...register("startDate")}/>


<label htmlFor='endDate'>End Date : </label>


<input type='date'

{...register("endDate")}/>

     </div>
  {/* ---------------------- Dates Start -----------------------   */}
    

       
        <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  onClick={close} type='submit'
                >
                  Add Medicine
                </Button>
              </div>
              
    </form> 
    </div>
              
            </DialogPanel>
          </div>
        </div>
      </Dialog>



   




    
    </>
  )
}

export default MedicationForm