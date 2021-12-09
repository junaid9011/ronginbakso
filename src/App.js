import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Authentication from './Componants/Authentication/Authentication';
import Dashboard from './Componants/Dashboard/Dashboard';
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
