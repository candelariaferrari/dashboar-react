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
        <ContentWrapper />
        </Route>
        <Route path="/Pages/Productos">
          <Productos />
        </Route>
      </Switch>
    </React.Fragment>

  )
}
export default MenuLateral;


/* import React from 'react';
import '../../assets/css/myStyle.css';



import image from '../../assets/images/logo-DH.png';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import Productos from '../Productos/Productos';
import { Link, Route, Switch } from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment> 
           
 
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
          
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

       
                <hr className="sidebar-divider my-0"/>


                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>
                            Dashboard</span></Link>
                </li>

               
                <hr className="sidebar-divider"/>

               
                <li className="nav-item">
                <Link className="nav-link" to="/Productos">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Productos</span>
                    </Link>
                </li>

           
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/GenresInDb">
                    <Productos />
                </Route>

            </Switch>
           
        </React.Fragment>
    )
}
export default SideBar;
 */


/* function SideBar() {
  return (
    <React.Fragment>
      <div className='flexUno'>
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
          
        </Route>
        <Route path="/Productos/Productos">
          <Productos />
        </Route>
      </Switch>
    </React.Fragment>

  )
}
export default SideBar; */