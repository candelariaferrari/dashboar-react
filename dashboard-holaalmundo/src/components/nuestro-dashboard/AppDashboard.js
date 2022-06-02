import React from 'react';
import '../../assets/css/myStyle.css';
import Header from './Header/Header';
import MenuLateral from './MenuLateral/MenuLateral';
import { BrowserRouter} from 'react-router-dom';

function AppDashboard() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MenuLateral/>
        
      </div>
    </BrowserRouter>
  );
}

export default AppDashboard;