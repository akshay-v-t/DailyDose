import React, { useEffect, useState } from 'react'

const CurrentTime = () => {

    const [CurrentTime, setCurrentTime] = useState();

 

    useEffect(()=>{

        const interval = setInterval(()=>{

            const now = new Date().toLocaleString()

            setCurrentTime(now)

        },1000)

        return ()=> clearInterval(interval);

      
       



    },[])

  return (
    <div className='flex items-center'>

        <p className='text-l '>{CurrentTime}</p>
    </div>
  )
}

export default CurrentTime