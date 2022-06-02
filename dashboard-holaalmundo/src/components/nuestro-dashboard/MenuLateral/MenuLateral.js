import React from 'react';
import '../../../assets/css/myStyle.css';
import Body from '../Body/Body';
import Productos from '../Pages/Productos';
import { Link, Route, Switch } from 'react-router-dom';


function MenuLateral() {
  return (
    <React.Fragment>{/* sidebar */}
      <div className='flexUno'>
        <div id="sidebar">
          <ul>
            <li>
              <Link className="nav-item" to="/">
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/productos">
                <span>Productos</span>
              </Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/">
            <Body className='contDash' />{/* contentRowCenter */}
          </Route>
          <Route path="../Page/Productos" >-
            <Productos />
          </Route>
        </Switch>
      </div>

    </React.Fragment>
  )
}
export default MenuLateral;