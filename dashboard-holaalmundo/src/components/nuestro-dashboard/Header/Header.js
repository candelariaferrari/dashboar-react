import React, { useState, useEffect }  from 'react';
import logo from '../../../assets/images/logo.png';
import person from '../../../assets/images/circle-user-solid.svg';
import '../../../assets/css/myStyle.css';

function Header() {
  const [users, setUsers] = useState("");
  useEffect(() => {
    const url = 'http://localhost:3000/api/users';
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
       
        console.log("hoola" + " " + json.data[0].name);
        setUsers(json.data[0].name);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
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