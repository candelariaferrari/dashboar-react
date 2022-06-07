import React from 'react';
import '../../../assets/css/myStyle.css';
import Body from '../Body/Body';
import Productos from '../Pages/Productos';
import { Link, Route, Switch } from 'react-router-dom';
import NotFound from '../Pages/NotFound';


function MenuLateral() {
  return (

    <div className='flexUno'>
      <div className='nuestroSidebar'>

        <Link to="/" >
          Dashboard
        </Link>

        <Link to="Productos">
          Productos
        </Link>
       

      </div>
      <Switch>


        
        <Route exact path="/" component={Body} />{/* contentRowCenter */}
        <Route exact path="/productos" component={Productos} />
        <Route component={NotFound} />
        
      </Switch>

    </div>


  )
}
export default MenuLateral;