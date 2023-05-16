import React from 'react';
import './App.css';
import { BrowserRouter as Routes, Route } from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>

      <HeaderComponent />
      <div className="container">
        <Routes>

          <Route path="/" exact component={ListEmployeeComponent}></Route>
          <Route path="/employees" component={ListEmployeeComponent}></Route>
          <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
          <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>
        </Routes>


      </div>
      <FooterComponent />

    </div>

  );
}

export default App;
