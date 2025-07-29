import React from 'react'
import { useSelector } from 'react-redux';

const RoutineTImes = () => {
        const timings = useSelector((state) => state.timings);

  return (
    <div>{/* Show data from Redux */}
      {timings && (
        <div className="mt-6 p-4 border rounded bg-white text-black shadow">
          <h3 className="text-xl font-bold mb-2">Stored Timings</h3>
          <ul className="list-disc pl-6">
            <li><strong>Wake Up Time:</strong> {timings.wakeTime}</li>
            <li><strong>Sleep Time:</strong> {timings.sleepTime}</li>
            <li><strong>Breakfast:</strong> {timings.breakfastTime}</li>
            <li><strong>Lunch:</strong> {timings.lunchTime}</li>
            <li><strong>Dinner:</strong> {timings.dinnerTime}</li>
          </ul>
        </div>
      )}</div>
  )
}

export default RoutineTImes