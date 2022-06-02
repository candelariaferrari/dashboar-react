import React from 'react';
import '../../../assets/css/myStyle.css';
import Dashboard from '../Pages/Dashboard';
import Productos from '../Pages/Productos';

function Body() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      
        <Dashboard />
       
      
    </div>
  );
}

export default Body;