const navLinkClass =  ({isActive})=>{

   return isActive ? "bg-blue-950 p-2 rounded flex transition-all flex gap-2" : " p-2 rounded flex transition-all flex gap-2";

}

export default navLinkClass;