import React from 'react';
import '../../../assets/css/myStyle.css';
import Body from '../Body/Body';
import Productos from '../Pages/Productos';
import { Link, Route, Switch } from 'react-router-dom';
import NotFound from '../Pages/NotFound';


function MenuLateral() {
  return (

    <div className='flexUno'>
      <div id="sidebar">

        <Link to="/" >
          Dashboard
        </Link>

        <Link to="/productos">
          Productos
        </Link>

      </div>
      <Switch>


        <Route path="/productos" component={Productos} />
        <Route exact path="/" component={Body} />{/* contentRowCenter */}s
        <Route component={NotFound} />
        
      </Switch>

    </div>


  )
}
export default MenuLateral;