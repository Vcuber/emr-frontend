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
            <Link to="/DoctorDashboard/">
            <ListItem button key="Dashboard">
                  <ListItemIcon><DashboardIcon></DashboardIcon></ListItemIcon>
                  <ListItemText primary="Dashboard" />
            </ListItem>
            </Link>            
            <Link to="/DoctorDashboard/Search">
                <ListItem button key="Search">
                    <ListItemIcon><LocalHospitalIcon></LocalHospitalIcon></ListItemIcon>
                    <ListItemText primary="Search" />
                </ListItem>
            </Link>
            <Link to="/DoctorDashboard/Clinical">
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
            </Link> 
            <Link to="/DoctorDashboard/Financial">
            <ListItem button key="Financial">
                  <ListItemIcon><PeopleIcon></PeopleIcon></ListItemIcon>
                  <ListItemText primary="Financial" />
            </ListItem>
            </Link> 
            <Link to="/DoctorDashboard/Medication">
            <ListItem button key="Medication">
                  <ListItemIcon><PeopleIcon></PeopleIcon></ListItemIcon>
                  <ListItemText primary="Medication" />
            </ListItem>
            </Link>
            <Link to="/DoctorDashboard/Profile">
            <ListItem button key="Profile">
                  <ListItemIcon><PeopleIcon></PeopleIcon></ListItemIcon>
                  <ListItemText primary="Profile" />
            </ListItem>
            </Link>       
          </List>
        </div>
    )
}

export default Navigation;