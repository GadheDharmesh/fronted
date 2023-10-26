import React, { useState } from 'react'

export default function Fstate() {
    var [data,setData]= useState({hi:[1,3],by:3,vache:'hehe'})
    var [data1,setData1]= useState('hehe')

   
    const Pure = ()=>{ setData({hi:[2,3],by:2,vache:"ji"})}
    const Pur = ()=>{ setData1('haha')}
    
    window.addEventListener("onclick",Pure);
  return (
    <>
         {data.by} <br/>
        <input value={data.by} onChange={(e)=>{setData(e.target.value)}}/> 
        <br/>
        {data1} <br/>
        <input value={data1} onChange={(me)=>{setData1(me.target.value)}}/> 
        <br/>
        
        <button id='btn' onClick={Pure}>click here</button>
        <button onClick={Pur}>click again</button> 
    </>
  )
}
