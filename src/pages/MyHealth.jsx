import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setTimings } from '../features/routines/timingsSlice';
import RoutineTImes from '../components/RoutineTImes';
const MyHealth = () => {

  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();


  const onSubmit = (data) => {
    dispatch(setTimings({
  wakeTime: data.wakeTime,
  sleepTime: data.sleepTime,
  breakfastTime: data.breakfastTime,
  lunchTime: data.lunchTime,
  dinnerTime: data.dinnerTime
}));

  };

  return (
    <div className="flex flex-col gap-8">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap gap-8">
        {/* Sleep Routine */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Sleep Routine</h2>
          <div className="flex gap-4 border border-white/20 rounded p-2 items-center">
            <label htmlFor="wakeTime" className="w-32">Wake Up Time:</label>
            <input type="time" id="wakeTime" {...register('wakeTime', { required: true })} className="bg-transparent border p-1 rounded" />
          </div>
          <div className="flex gap-4 border border-white/20 rounded p-2 items-center">
            <label htmlFor="sleepTime" className="w-32">Sleep Time:</label>
            <input type="time" id="sleepTime" {...register('sleepTime', { required: true })} className="bg-transparent border p-1 rounded" />
          </div>
        </div>

        {/* Food Timings */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Food Timings</h2>
          <div className="flex gap-4 border border-white/20 rounded p-2 items-center">
            <label htmlFor="breakfastTime" className="w-32">Breakfast:</label>
            <input type="time" id="breakfastTime" {...register('breakfastTime', { required: true })} className="bg-transparent border p-1 rounded" />
          </div>
          <div className="flex gap-4 border border-white/20 rounded p-2 items-center">
            <label htmlFor="lunchTime" className="w-32">Lunch Time:</label>
            <input type="time" id="lunchTime" {...register('lunchTime', { required: true })} className="bg-transparent border p-1 rounded" />
          </div>
          <div className="flex gap-4 border border-white/20 rounded p-2 items-center">
            <label htmlFor="dinnerTime" className="w-32">Dinner Time:</label>
            <input type="time" id="dinnerTime" {...register('dinnerTime', { required: true })} className="bg-transparent border p-1 rounded" />
          </div>
        </div>

        <button type="submit" className="self-start mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 duration-200">
          Submit
        </button>
      </form>
      <RoutineTImes/>

      
    </div>
  );
};

export default MyHealth;
