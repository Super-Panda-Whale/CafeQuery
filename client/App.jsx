import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddWorkspace from './components/addWorkspace.jsx';
import HomePage from './containers/HomePage.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import NavBar from './containers/NavBarContainer.jsx'

function App()  {
  return (
    <div className="App">
      <BrowserRouter>        
          <NavBar />
          <Routes>
              <Route path='/' element={<App />}></Route>
              <Route index element ={<HomePage />}></Route>
              <Route path='/add' element ={<AddWorkspace />}></Route>
              <Route path='/login' element ={<Login />}></Route>
              <Route path='/signup' element = {<Signup />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

/* 
  User Stories
  TO TEST:
    - adds a location
    - adds reviews
      shows all reviews for a workspace
      clicking on a review shows a single review for that workspace
    - shows all locations for a zipcode
      clicking on a location shows a single workspace
    - login & signup & logout (check for redirects too)
*/

export default App;
