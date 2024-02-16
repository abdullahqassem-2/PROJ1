import React from 'react'

export default function Contact() {
  return <>
  <div className=" d-flex flex-column align-items-center ">

    <h1 className='text-black mt-2'>CONATCT SECTION </h1>
    <p className='text-black'> __________  <i class="fa-solid fa-star fs-4"></i>  __________</p>
  </div> 

  <div className="d-flex  justify-content-center align-items-center  ">
  <div className=" w-50 vh-100  ">
<input className='form-control mt-4' type="text" placeholder='your name'  />
<input className='form-control mt-4' type="number "placeholder='your age' />
<input className='form-control mt-4' type="email "  placeholder = 'your email' />
<input className='form-control mt-4' type="password " placeholder='your password'/>
<button className=' btn btn-dark mt-5 px-3'>send message</button>
  </div>

  </div>
  
  </>
   
  
}
