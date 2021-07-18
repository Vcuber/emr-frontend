import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import {Link} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useAppContext } from "../../../libs/contextLib";
import { useHistory } from "react-router";

const Navigation = () => {

  const {userHasAuthenticated} = useAppContext();
  const history = useHistory();

  function handleLogout() {
    userHasAuthenticated(false);
    localStorage.removeItem("Authenticated");
    history.push("/");
  }

    return (
        <div>
            <div>
          <List>
            <ListItem to="/PatientDashboard" component={Link} button key="Profile">
                  <ListItemIcon><DashboardIcon></DashboardIcon></ListItemIcon>
                  <ListItemText primary="Profile" />
            </ListItem>        
            <ListItem to="/PatientDashboard/Appointment" component={Link} button key="Appointment">
                  <ListItemIcon><PeopleIcon></PeopleIcon></ListItemIcon>
                  <ListItemText primary="Appointment" />
            </ListItem>
            <ListItem to="/PatientDashboard/Charts" component={Link} button key="Charts">
                  <ListItemIcon><PeopleIcon></PeopleIcon></ListItemIcon>
                  <ListItemText primary="Charts" />
            </ListItem>
            <Divider />
            <ListItem button key="Logout" onClick={handleLogout}>
                  <ListItemIcon><ExitToAppIcon></ExitToAppIcon></ListItemIcon>
                  <ListItemText primary="Logout" />
            </ListItem> 
          </List>
        </div>
        </div>
    )
}

export default Navigation;