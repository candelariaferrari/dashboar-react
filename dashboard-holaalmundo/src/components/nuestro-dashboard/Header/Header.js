import React, { useState, useEffect }  from 'react';
import logo from '../../../assets/images/logo.png';
import person from '../../../assets/images/circle-user-solid.svg';
import '../../../assets/css/myStyle.css';

function Header() {
  const [users, setUsers] = useState(""); //estado
  useEffect(() => {
    const url = 'http://localhost:3000/api/users'; //definimos url
    const fetchDataUsers = async () => { //funcion asincrona
      try {
        const response = await fetch(url); //espere a hacer la busqueda
        const json = await response.json(); //lo transformamos en json
        console.log(json); //array completo
       
        setUsers(json.data[0].name);//lo guardamos en el estado
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchDataUsers();
  }, []);
  return (
    <div className='container-fluid black'>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <img className="img-profile" src={logo} alt="logo" />
            <div className="d-flex">
              <span className="textName">Hola, <strong>{users} !</strong> </span>
              <img className="person" src={person} alt="logo" />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );

}
export default Header;