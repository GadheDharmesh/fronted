
import { useState } from 'react';

export default function Nesto() {
    const [adress,setdata]=useState({name:'harsh',age:22,address:{city:{area:'cg',pin:380008}}})
    function hi(){  
        setdata({
          ...adress,
          address:{
          ...adress.address,
          city:{
                ...adress.address.city,
                pin:362725
          }
        }})}
  
  return (
    <div className="App">
    {adress.name}
    {adress.address.city.pin}
    {adress.address.city.area}
    <button onClick={hi}> change</button>
    </div>
  )
  
}
