import React from 'react'
import img1 from '../components/IMAGE/malu1.jpg'

const Education = () => {
  return (
    
    <div class="body">
    
    
     <img src={img1} width="500"  height="500" class="rounded-circle"alt="" />
    
      
     
     <div class="head">
         <h1 >I'M AKHIRA S R</h1>
        <h2> FULL STACK DEVELOPER</h2>
      
      
      </div>
      <div class="edu">
     <h1>MY EDUCATION </h1></div>
      <div class="row">
  <div class="col-sm-3 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body1">
        <h5 class="card-title">Python Full Stack(2024)</h5>
        <p class="card-text">Network Systems</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body2">
        <h5 class="card-title">Bachelor's Degree(2017-2020)</h5>
        <p class="card-text">Bsc Computer Science</p>
        <p class="card-text">UIT Pirappancode</p>
       
      </div>
    </div>
  </div>
  <div class="col-sm-3 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body3">
        <h5 class="card-title">High School(2015-2017)</h5>
        <p class="card-text">GHSS Pirappaancode</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body4">
        <h5 class="card-title">School(2015)</h5>
        <p class="card-text">GVHSS Pirappancode</p>
       
      </div>
    </div>
  </div>
</div>
      
    </div>
 
  )
}

export default Education