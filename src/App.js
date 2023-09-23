import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Authentication from './Componants/Authentication/Authentication';
import Dashboard from './Componants/Dashboard/Dashboard';
import { createContext, useState } from 'react';
import Volenteers from './Componants/Voluenteers/Volenteers';
import Donate from './Componants/Donate/Donate';

export const userContext=createContext();
function App() {
  const [loggedIn,setLoggedIn]=useState({});
  return (
    <userContext.Provider value={[loggedIn,setLoggedIn]}>
      
      
     <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/login' element={<Authentication/>} />
          <Route  path='/dashboard' element={<Dashboard/>} />
          <Route  path='/voluenteer' element={<Volenteers/>} />
          <Route  path='/donate' element={<Donate/>} />
          <Route  path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
     </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
