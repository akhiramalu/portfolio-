import React from 'react'
import hschool from '../components/IMAGE/ischool.jpg'
import ishool from '../components/IMAGE/highschool.avif'

import degree from '../components/IMAGE/degree.png'
import net from '../components/IMAGE/net.jpg'


const Education = () => {
  return (
    <div class="container-fluid">
    <div class="header">
     <div class="wrapper">
  <div class="bg"> education </div>
  <div class="fg"> education </div>
</div>



 <div class="body5">
  <div class="row">
    <div class="card1">
    <img src={hschool}  class="hi"/>
    <div class="card-img-overlay">
      <h1 class="h1"> MY <span>SCHOOLING</span></h1>
      <p class="p">G.V.H.S.S PIRAPPANCODE</p>
    </div>
    </div>
    <div class="card1">
    <img src={ishool}  class="hi"/>
    <div class="card-img-overlay">
      <h1 class="h2">HIGH SCHOOL</h1>
      <p class="h2">G H S S PIRAPPANCODE</p>
    </div>
    </div>
    <div class="card1">
    <img src={degree}  class="hi"/>
    <div class="card-img-overlay">
      <h1 class="h3"> BACHELOR'S DEGREE </h1>
      <p class="p">UNIVERSTY INSTITUTE OF TECHNOLOGY
        PIRAPPANCODE
      </p>
    </div>
    </div>
    <div class="card1">
    <img src={net}  class="hi"/>
    <div class="card-img-overlay">
      <h1 class="h4">PYTHON FULLSTACK</h1>
      {/* <p>NETWOK SYSTEMS</p> */}
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>

  )
}

export default Education