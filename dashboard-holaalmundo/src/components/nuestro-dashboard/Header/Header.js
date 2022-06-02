import logo from '../../../assets/images/logo.png';
import person from '../../../assets/images/circle-user-solid.svg';
import '../../../assets/css/myStyle.css';


function Header() {
  return (
    <div className='container-fluid black'>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <img className="img-profile" src={logo} alt="logo" />
            <div className="d-flex">
              <span className="textName">Hola, <strong>Nombre !</strong> </span>
              <img className="person" src={person} alt="logo" />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );

}
export default Header;