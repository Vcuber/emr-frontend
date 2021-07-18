import './App.css';
import React, {useState} from 'react';
import HomePage from './Components/HomePage/HomePage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PatientDashboard from './Components/PatientView/PatientDashboard';
import DoctorDashboard from './Components/DoctorView/DoctorDashboard';
import { AppContext } from './libs/contextLib';
import PrivateRoute from './libs/router';
import {UserProvider} from './libs/userContext';

function App() {

  const [isAuthenticated, userHasAuthenticated] = useState(false);

  return (
    <div className="App">
      <AppContext.Provider value={{isAuthenticated, userHasAuthenticated}}>
      <UserProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <PrivateRoute path="/PatientDashboard" component={PatientDashboard} />
          <PrivateRoute path="/DoctorDashboard" component={DoctorDashboard} />
          { /* <Route path="/" component={} /> */}
        </Switch>
      </BrowserRouter>
      </UserProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
