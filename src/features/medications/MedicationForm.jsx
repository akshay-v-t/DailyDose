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

    const {register, handleSubmit, reset, watch } = useForm();

    const dispatch = useDispatch();

    const onSubmit = (data)=>{
        dispatch(addMedication({
            id:uniqid(),
            name:data.name,
            dosage:{
              amount: data.dosage.amount,
              unit: data.dosage.unit
              
            },
            timings:data.timings,          
            startDate: data.startDate,
            endDate: data.endDate,         
            dietaryInstructions: data.dietaryInstructions,
            notes: data.notes,


            reminder: data.reminder,
            taken:false,
        }));
        reset();
    }

    const selectedTimings = watch("timings", [])
    



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
              className="w-full max-w-2xl rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="h3" className="text-xl mb-4 font-medium text-white border-b-1 border-gray-500 pb-3 w-fit ">
                Medicine Details
              </DialogTitle>
              
              <div className='add-medicine-modal'>
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 mb-4'>


      {/* ---------------------- Medicine Name Start -----------------------   */}

      <div className='flex items-center gap-4'>
        <label htmlFor="medicineName" className="block font-medium mb-1 min-w-fit">Medicine Name : </label>
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
        
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div>
    <label htmlFor="quantity" className="block font-medium text-sm text-white">Quantity</label>
    <input
      type='number'
      placeholder='Enter Quantity'
      className='mt-1 w-full rounded-md border border-gray-300 bg-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500'
      {...register("dosage.amount")}
    />
  </div>

  <div>
    <label htmlFor="unit" className="block font-medium text-sm text-white ">Unit</label>
    <select
      className='mt-1 w-full rounded-md border border-gray-300 bg-white/10  px-3 py-2 h-10 text-white focus:outline-none focus:ring-2 focus:ring-green-500 '
      {...register("dosage.unit")}
    >

<option value="tablet" >tablet</option>
      <option value="ml">ml</option>
      <option value="mg">mg</option>
      
    </select>
  </div>
</div>


 {/* ---------------------- Dosage End -----------------------   */}

  {/* ---------------------- Timings Start -----------------------   */}
  <div>
  <label className="block font-medium text-sm text-white mb-2">Timings</label>
  <div className="flex flex-wrap gap-4">
    {["morning", "noon", "evening", "night"].map((time) => (
      <label key={time} className="flex items-center gap-2 text-white">
        <input type="checkbox" value={time} {...register("timings")} />
        {time.charAt(0).toUpperCase() + time.slice(1)}
      </label>
    ))}
  </div>
</div>

{
    selectedTimings.length >0 && (
      <div className='flex gap-2'> <p>Frequency : </p>
        {
         selectedTimings.length === 1 ? <p> 1 time a day</p> : <p> {selectedTimings.length} times a day</p>
        }
        
      </div>
    )
  }


   {/* ---------------------- Timings End -----------------------   */}




  {/* ---------------------- Dates Start -----------------------   */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div>
    <label htmlFor="startDate" className="block font-medium text-sm text-white mb-1">Start Date</label>
    <input type='date' className="w-full rounded-md bg-white/10 px-3 py-2 text-white" {...register("startDate")} />
  </div>

  <div>
    <label htmlFor="endDate" className="block font-medium text-sm text-white mb-1">End Date</label>
    <input type='date' className="w-full rounded-md bg-white/10 px-3 py-2 text-white" {...register("endDate")} />
  </div>
</div>

  {/* ---------------------- Dates End -----------------------   */}
  
  {/* ---------------------- Dietary Instructions Start -----------------------   */}

  <div>
  <label className="block font-medium text-sm text-white mb-2">Dietary Instructions</label>
  <div className="flex gap-6">
    <label className="flex items-center gap-2 text-white">
      <input type="radio" value="Before Food" {...register("dietaryInstructions")} />
      Before Food
    </label>
    <label className="flex items-center gap-2 text-white">
      <input type="radio" value="After Food" {...register("dietaryInstructions")} />
      After Food
    </label>
  </div>
</div>


<div>
  <label htmlFor="notes" className="block font-medium text-sm text-white mb-2">Notes</label>
  <textarea
    className="w-full h-24 rounded-md bg-white/10 px-3 py-2 text-white resize-none"
    {...register("notes")}
  />
</div>

  {/* ---------------------- Notes End -----------------------   */}
    

       
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