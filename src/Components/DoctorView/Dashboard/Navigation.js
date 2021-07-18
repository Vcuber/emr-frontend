import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useAppContext } from "../../../libs/contextLib";
import { useHistory } from "react-router";

const Navigation = () =>{

      const history = useHistory();

      const {userHasAuthenticated} = useAppContext();
      function handleLogout() {
            userHasAuthenticated(false);
            localStorage.removeItem("Authenticated");
            history.push("/");
      }

    return (      
        <div>
          <List>
            <ListItem to="/DoctorDashboard/" component={Link} button key="Dashboard">
                  <ListItemIcon><DashboardIcon></DashboardIcon></ListItemIcon>
                  <ListItemText primary="Dashboard" />
            </ListItem>        
            <ListItem to="/DoctorDashboard/Search" component={Link} button key="Search">
                  <ListItemIcon><LocalHospitalIcon></LocalHospitalIcon></ListItemIcon>
                  <ListItemText primary="Search" />
            </ListItem>
            <ListItem to="/DoctorDashboard/Profile" component={Link} button key="Profile">
                  <ListItemIcon><PeopleIcon></PeopleIcon></ListItemIcon>
                  <ListItemText primary="Profile" />
            </ListItem>
            <Divider />
            <ListItem button key="Logout" onClick={handleLogout}>
                  <ListItemIcon><ExitToAppIcon></ExitToAppIcon></ListItemIcon>
                  <ListItemText primary="Logout" />
            </ListItem>     
          </List>
        </div>
    )
}

export default Navigation;