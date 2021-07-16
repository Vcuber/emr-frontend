import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    margin: 'auto',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  paper: {
    padding: 8,
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>{children}</Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Search() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [searchData, setSearchData] = useState('');
  const [data, setData] = useState('');
  const [data2, setData2] = useState('');
  const [resMed, setresMed] = useState('');

  const getPatient = async(e) => {

    e.preventDefault();
    
    try {
      const response1 = await fetch(`/patient/${searchData}`, {
        method: "get"
      });
      if(response1.status === 200) {
        const dataResponse = await response1;
        const data = await response1.json();
        console.log(data);
        console.log(dataResponse);
        setData(data);
        getUser(data);
        getMedication(data);
      }
      else {
        window.alert("Patient does not exist!");
      }
    }
    catch(e1) {
      console.log(e1);
    }
  }

  const getUser = async(data) => {

    try {
      const response2 = await fetch(`/user/${data.user_id}`, {
        method: "get"
      });
      if(response2.status === 200) {
        const dataResponse2 = await response2;
        const data2 = await response2.json();
        console.log(data2);
        console.log(dataResponse2);
        setData2(data2);
      }
    }
    catch(e2) {
      console.log(e2);
    }
  }

  const getMedication = async(data) => {
    try {
      const responseMed = await fetch(`/medication/${data.user_id}`, {
        method: "get"
      });
      if(responseMed.status === 200) {
        const resMed = await responseMed;
        setresMed(resMed);
      }
    }
    catch(e3) {
      console.log(e3);
    }
  }

  return (
    <div>
    <Paper component="form" className={classes.root} onSubmit={getPatient}>
      <InputBase
        className={classes.input}
        placeholder="Search for Patients Details"
        inputProps={{ 'aria-label': 'search patient details' }}
        value={searchData}
        onChange={e => setSearchData(e.target.value)}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    {data !== '' && (
      <div className="modal-box">
      <AppBar position="static">
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Profile" {...a11yProps(0)} />
        <Tab label="Medication" {...a11yProps(1)} />
        <Tab label="Charts" {...a11yProps(2)} />
      </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Patient ID: {searchData}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Patient Name: {data2.fullname}</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Gender: {data2.gender}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Date of Birth: {data2.dob}</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Email ID: {data2.email}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Address: {data2.address}</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Phone Number: {data2.phone}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Commn. Language: {data.communication_language}</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Contact's Name: {data.contact_name}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Contact's Number: {data.contacts_number}</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Contact's Relationship: {data.contact_relationship}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Marital Staus: {data.martial_status}</Paper>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
    
      </TabPanel>
      <TabPanel value={value} index={2}>

      </TabPanel>
      </div>
    )}
    </div>
  );
}