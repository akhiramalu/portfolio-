import React from 'react'

import img3 from '../components/IMAGE/html.png'
import img4 from '../components/IMAGE/css.png'
import img5 from '../components/IMAGE/js.jpg'
import img6 from '../components/IMAGE/boostrap.jpg'
import img7 from '../components/IMAGE/react.jpg'
import img8 from '../components/IMAGE/py.jpg'
import img9 from '../components/IMAGE/dj.png'





const Skills = () => {
  return (
    
    <div class="container1">
    <div class="row">
      <div class="col-sm">
      <div class="d-flex  justify-content-center">
  <div class="d-flex text-primary">
      <div class="vr border-10 opacity-100"></div>
      <div class="lang">
      <i class="fas fa-language" />
      <h3>Languages</h3>
      <ul>
        <li>
          English
        </li>
        <li>malayalam</li>
      </ul>
      <ul>
      <h3>Soft Skills</h3>
      <li>Communication Skill</li>
      <li>Attension to Detail</li>
      <li>Team Work</li>
      <li>Problem Solving Skill</li>
      <li>Adaptability</li>
      </ul>
      <ul>
      <i class="bi bi-code text-success"></i>

      <h3>Technical Skills</h3>
      <h4>front end</h4>
      <li>Knowledge of HTML and CSS</li>
      <li>Knowledge of JS</li>
      <li>Boostrap,React js</li>
      <li>Problem Solving Skill</li>
      <li>Adaptability</li>
      <h4>Back end</h4>
      <li>Python </li>
      <li>Django </li>
      


      </ul>
      </div>
   
      
    
  </div>
  

</div>
       
      </div>
      
      <div class="col-sm">
        <div class="shrink">
      <div class="img1">
        <h1>Frond end</h1>
      <img src={img3} width="160"/>
      <img src={img4} width="160"/>
      <img src={img5} width="160"/>
      </div>
      <div class="img1">
      <img src={img6} width="160"/>
    
      <img src={img7}  class="img3"width="160"/>
      
      </div>
      
      <div class="img">
        <h1>Back end</h1>
      <img src={img8} width="160"/>
      <img src={img9}  class="img3"width="160"/>
      
      </div>
      
      </div>
     </div>
     </div>
     </div>
  )
}

export default Skills