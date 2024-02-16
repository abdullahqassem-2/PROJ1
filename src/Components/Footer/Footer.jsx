import React from 'react'

export default function Footer() {
  return <>
   <div className=" ">
      <div className='bg-black text-light text-center py-4   '>


      <div className="row w-100">
              <div className="col-md-4 text-center text-white">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>


              </div>

              <div className="col-md-4 text-center text-white ">
                <h3>AROUND THE WEB</h3>
                <div className="d-flex  justify-content-center align-items-center column-gap-3">
                  <span><i class="fa-brands fa-facebook fs-3"></i></span>
                  <span><i class="fa-brands fa-twitter fs-3"></i></span>
                  <span><i class="fa-brands fa-github fs-3"></i></span>
                  <span><i class="fa-solid fa-globe fs-3"></i></span>

                </div>
              </div>
              <div className="col-md-4 text-center text-white px-5">
                <h3>About Honda</h3>

                <p className='lh-sm'>Honda is a mobility company powered by everyone's dreams, creating mobility that helps and inspires people, in a wide range of fields such including motorcycles, automobiles, power products and aircraft.</p>
              </div>

          </div>


        <div className='bg-white text-black  w-100 position-absolute'>
          <p className='text-center  w-100'>Copyright © Your Website 2024</p>
        </div>



      </div>

    </div> 
  
  
  </>

}
