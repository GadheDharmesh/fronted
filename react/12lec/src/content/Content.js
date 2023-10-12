import React from 'react'

export default function Content() {
  return (<>
    <div className='mycontent p-5 '>
       <div className=' m-5'>
        <h1>Howzat for a perfect stay</h1>
        <h3>Search hotels,homes and much more...</h3>
        <button className='corner bg-primary mt-5 p-2'>Discover more</button>
       </div>
       <div className='d-flex footer flex-wrap  flex-md-nowrap'>
            <div className='border border-warning bg-white text-dark p-2'> <i class="fa fa-bed" aria-hidden="true"></i>
            Where are you going? </div>
            <div className='border border-warning bg-white text-dark p-2'> <i class="fa fa-calendar" aria-hidden="true"></i>
             check in date -- check out date </div>
            <div className='border border-warning bg-white text-dark p-2'> <i class="fa fa-user" aria-hidden="true"></i>
            adult- child - room</div>
            <button className='border border-warning bg-primary p-2 corner'>Search</button>
         </div>
    </div>
   
    </>
  )
}

 
