import React from 'react'
import '../css/Header.css' 
export default function Header()
{
    return(
        <>
       <div className="container-fluid head">
       
       <div className=" p-2  d-flex  justify-content-center  justify-content-md-between ">
            <div className="p-3 ms-5 fw-bold fs-2"> 
             BOOKING.COM 
            </div>
            
              <ul className=' d-flex justify-content-center  d-none d-lg-block p-3'>
             
              <li  className=' m-2 d-inline'>inr</li>
             <li  className=' m-2 d-inline'><img height={'30px'} className=' rounded-circle' alt='hi' src='https://t-cf.bstatic.com/design-assets/assets/v3.96.0/images-flags/In@3x.png'/></li> 
             <li  className=' m-2 d-inline'>   <i class="fa fa-question-circle-o" aria-hidden="true"></i></li> 
              <li className=' m-2 d-inline'>list of your property</li>
               <li  className=' m-2 d-inline'><button className=' bg-white  ps-3  pe-4 rounded text-primary'>Regesiter</button></li>  
              <li  className=' m-2 d-inline'> <button className=' bg-white ps-3 pe-4  rounded text-primary'>Sign in</button></li>
              </ul>
        </div>
        <div  className='ms-5 d-flex justify-content-center  d-block d-md-none p-2'>
        <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <ul className='ms-5 d-flex justify-content-center  d-none d-lg-block p-2'>
          <li  className=' m-2 d-inline rounded-pill bound pt-2 pb-2 pe-4 ps-4'> <i class="fa fa-user" aria-hidden="true"></i> Stays</li>
          <li  className=' m-2 d-inline rounded-pill bound pt-2 pb-2 pe-4 ps-4 '> <i class="fa fa-user" aria-hidden="true"></i> Flight</li>
          <li  className=' m-2 d-inline rounded-pill bound pt-2 pb-2 pe-4 ps-4'> <i class="fa fa-user" aria-hidden="true"></i> Hotels</li>
          <li  className=' m-2 d-inline rounded-pill bound pt-2 pb-2 pe-4 ps-4'> <i class="fa fa-user" aria-hidden="true"></i> Cars rentals</li>
          <li  className=' m-2 d-inline rounded-pill bound pt-2 pb-2 pe-4 ps-4'> <i class="fa fa-user" aria-hidden="true"></i> Attraction</li>
          <li  className=' m-2 d-inline rounded-pill bound pt-2 pb-2 pe-4 ps-4'> <i class="fa fa-user" aria-hidden="true"></i> Aitport taxis</li>
        </ul>
       </div>
        </>
    )
}