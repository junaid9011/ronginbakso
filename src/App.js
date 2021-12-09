import logo from './logo.svg';
import './App.css';
import Header from './Componants/Header/Header';
import Carousel from './Componants/Carousel/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Authentication from './Componants/Authentication/Authentication';
import Header2 from './Componants/Header/Header2';
import Dashboard from './Componants/Dashboard/Dashboard';
import Notificaton from './Componants/Notifications/Notification'
import { createContext, useState } from 'react';

export const userContext=createContext();
function App() {
  const [loggedIn,setLoggedIn]=useState({});
  return (
    <userContext.Provider value={[loggedIn,setLoggedIn]}>
      
      
     <BrowserRouter>
      {/* <Header></Header> */}
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/login' element={<Authentication/>} />
          <Route  path='/dashboard' element={<Dashboard/>} />
          {/* <Route  path='/n' element={<Notificaton/>} /> */}
        </Routes>
     </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
