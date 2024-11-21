import React from 'react'
import img1 from '../components/IMAGE/malu1.jpg'

const Education = () => {
  return (
    <div class="container-fluid">
    <div class="header">
     <div class="wrapper">
  <div class="bg"> education </div>
  <div class="fg"> education </div>
</div>



    </div>
    <div class="row">
    <div class="body2">
    <div class = "container2">
    <div class = "card">
      <div class = "images">
      <img src={img1} />
           
      </div>
      <div class = "content">
        <h3>This is content</h3>
        <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
      </div>
     
  </div>
    </div>    
   </div> 
  
  </div>
    
  </div>
 
            
  )
}

export default Education