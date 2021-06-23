import './App.css';
import React from 'react';
import HomePage from './Components/HomePage/HomePage';
import {BrowserRouter, Route} from 'react-router-dom';
import PatientDashboard from './Components/PatientView/PatientDashboard';
import DoctorDashboard from './Components/DoctorView/DoctorDashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={HomePage} exact/>
        <Route path="/PatientDashboard" component={PatientDashboard} />
        <Route path="/DoctorDashboard" component={DoctorDashboard} />
        { /* <Route path="/" component={} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
