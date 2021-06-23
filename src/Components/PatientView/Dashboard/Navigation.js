import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import {Link} from 'react-router-dom';

const Navigation=()=>{
    return (
            
        <div>
            <div>
          <List>
            <Link to="/PatientDashboard">
            <ListItem button key="Profile">
                  <ListItemIcon><DashboardIcon></DashboardIcon></ListItemIcon>
                  <ListItemText primary="Profile" />
            </ListItem>
            </Link>            
            <Link to="/PatientDashboard/Appointment">
            <ListItem button key="Appointment">
                  <ListItemIcon><PeopleIcon></PeopleIcon></ListItemIcon>
                  <ListItemText primary="Appointment" />
            </ListItem>
            </Link>
          </List>
        </div>
        </div>
    )
}

export default Navigation;