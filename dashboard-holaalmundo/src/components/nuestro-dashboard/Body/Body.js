import React from 'react';
import '../../../assets/css/myStyle.css';
import Header from '../Header/Header';
import ContenedorPag from '../Pages/ContenedorPag';
import Dashboard from '../Pages/Dashboard';
import Productos from '../Pages/Productos';

function Body() { /* contentRowCenter */
  return (
    <div className='row'>
       <ContenedorPag />
       <Productos /> 
    </div>
   /*  <div id="content-wrapper" className="d-flex flex-column">
      <Header />
     
    </div> */
  );
}

export default Body;