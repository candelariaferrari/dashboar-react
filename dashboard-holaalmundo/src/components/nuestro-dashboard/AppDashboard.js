import React,{useState, useEffect} from 'react';
import '../../assets/css/myStyle.css';
import Header from './Header/Header';
import MenuLateral from './MenuLateral/MenuLateral';
import { BrowserRouter} from 'react-router-dom';


function AppDashboard() {
  const url = 'http://localhost:3000/api/users';
  const [todos, setTodos] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    console.log(response.status);
    const responseJSON = await response.json()
    setTodos(responseJSON)
    console.log(responseJSON);
  }
  useEffect(()=>{
    fetchApi()
  },[])
  return (
    <BrowserRouter>
      <div className="App">
        <Header /> 
        <MenuLateral/> {/* sidebar */}
        
      </div>
    </BrowserRouter>
  );
}

export default AppDashboard;