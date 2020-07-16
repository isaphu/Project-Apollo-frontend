import React, { useState } from 'react';
// import './App.css';
// import { Switch, Route } from 'react-router-dom';
// import Login from './components/pages/PublicPages/Login';
import PrivateRoutes from './components/private-routes/PrivateRoutes';
import { BrowserRouter } from "react-router-dom";


function App() {
  const [role, setRole] = useState('user')
  return (
    <div className="App">
      <BrowserRouter >
      <PrivateRoutes role={role} setRole={setRole} />
      </BrowserRouter>
    </div>
  );
}

export default App;
