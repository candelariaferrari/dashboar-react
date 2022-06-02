import React from 'react';
import '../../assets/css/myStyle.css';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import Productos from '../Productos/Productos';
import { Link, Route, Switch } from 'react-router-dom';

function MenuLateral() {
  return (
    <React.Fragment>
      <div className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
      
        <div id="sidebar">
          <Link className="itemLink" to="/">
            <i className="fas fa-fw fa-folder"></i>
            <span>Dashboard</span>
          </Link>
          <Link className="itemLink" to="/Pages/Productos.js">
            <i className="fas fa-fw fa-folder"></i>
            <span>Productos</span>
          </Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <ContentWrapper/>
        </Route>
        <Route path="/Pages/Productos">
          <Productos />
        </Route>
      </Switch>
    </React.Fragment>

  )
}
export default MenuLateral;