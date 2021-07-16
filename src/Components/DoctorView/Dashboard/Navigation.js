import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import {Link} from 'react-router-dom';

const Navigation = () =>{
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
            {/* <Link to="/DoctorDashboard/Clinical">
            <ListItem button key="Clinical">
                  <ListItemIcon><PeopleIcon></PeopleIcon></ListItemIcon>
                  <ListItemText primary="Clinical" />
            </ListItem>
            </Link>
            <Link to="/DoctorDashboard/Diagnostics">
            <ListItem button key="Diagnostics">
                  <ListItemIcon><PeopleIcon></PeopleIcon></ListItemIcon>
                  <ListItemText primary="Diagnostics" />
            </ListItem>
            </Link>  */}
            {/* <Link to="/DoctorDashboard/Medication">
            <ListItem button key="Medication">
                  <ListItemIcon><PeopleIcon></PeopleIcon></ListItemIcon>
                  <ListItemText primary="Medication" />
            </ListItem> 
            </Link>*/}
            <ListItem to="/DoctorDashboard/Profile" component={Link} button key="Profile">
                  <ListItemIcon><PeopleIcon></PeopleIcon></ListItemIcon>
                  <ListItemText primary="Profile" />
            </ListItem>     
          </List>
        </div>
    )
}

export default Navigation;