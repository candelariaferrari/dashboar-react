import React from 'react';
import '../../../assets/css/myStyle.css';
import Body from '../Body/Body';


function MenuLateral() {
  return (
    <div className='flexUno'>
      <div id="sidebar">
       
        
          <span className='itemLink'>Dashboard</span>
        
          
          <span className='itemLink'>Productos</span>
        
      </div>
      <div className='contDash'>
            <Body/>
      </div>
    </div>
   

  )
}
export default MenuLateral;