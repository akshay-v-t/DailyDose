import { useSelector } from "react-redux"
import { useEffect } from "react";
import HomePage from "./pages/HomePage";

function App() {

  const medications = useSelector((state)=> state.medications.list);

  useEffect(()=>{

    localStorage.setItem('medications', JSON.stringify(medications))

  },[medications])

  return (

    <div>

      <HomePage/>
    </div>
  )
   

}

export default App
