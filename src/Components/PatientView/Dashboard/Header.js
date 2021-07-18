import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {BrowserRouter  as Router,Switch,Route} from 'react-router-dom'

import Navigation from './Navigation'
import Profile from './Profile';
import Appointment from './Appointment'
import BMI from './BMI'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <Router> 
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Patient Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <Navigation></Navigation>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />        
            <Switch>
              <Route path="/PatientDashboard/" exact component={Profile}></Route>
              <Route path="/PatientDashboard/Appointment" component={Appointment}></Route>
              <Route path="/PatientDashboard/Charts" component={BMI}></Route>
            </Switch>
      </main>
    </div>
    </Router>
  );
}