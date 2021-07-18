import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {LineChart, Line,  XAxis,  YAxis,  CartesianGrid,  Tooltip,  Legend} from 'recharts';

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
  table: {
    minWidth: 400,
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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createDataMed(name, form, status) {
  return {name, form, status};
}

function createDataAll(category, clinical_status, criticality, reaction_exposure_route, reaction_manifestation, reaction_substance) {
  return {category, clinical_status, criticality, reaction_exposure_route, reaction_manifestation, reaction_substance};
}

function createDataImm(funding_source, reason_code, report_origin, route, site, target_disease) {
  return {funding_source, reason_code, report_origin, route, site, target_disease};
}

function createDataPro(body_site, category, clinical_status, code, reaction_severity, severity) {
  return {body_site, category, clinical_status, code, reaction_severity, severity}
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
  const [allergy, setAllergy] = useState('');
  const [immunization, setImmunization] = useState('');
  const [problem, setProblem] = useState('');
  const [bmi, setBMI] = useState('');

  const getPatient = async(e) => {

    e.preventDefault();
    
    try {
      const response1 = await fetch(`/patient/${searchData}`, {
        method: "get"
      });
      if(response1.status === 200) {
        const data = await response1.json();
        setData(data);
        getUser(data);
        getMedication(data);
        getAllergy();
        getImmunization();
        getProblem();
        getBMI();
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
        const data2 = await response2.json();
        setData2(data2);
      }
    }
    catch(e2) {
      console.log(e2);
    }
  }

  const getMedication = async() => {
    try {
      const responseMed = await fetch(`/medication/of/patient/${searchData}`, {
        method: "get"
      });
      if(responseMed.status === 200) {
        const resMed = await responseMed.json();
        setresMed(resMed);
      }
    }
    catch(e3) {
      console.log(e3);
    }
  }

  var rowsMed = [];
  for(var i=0; i<resMed.length; i++) {
    rowsMed[i] = createDataMed(resMed[i].medicine_name, resMed[i].form, resMed[i].status);
  }

  const getAllergy = async() => {
    try {
      const responseAll = await fetch(`/allergy/of/${searchData}`, {
        method: "get"
      });
      if(responseAll.status === 200) {
        const resAll = await responseAll.json();
        setAllergy(resAll);
      }
    }
    catch(e3) {
      console.log(e3);
    }
  }

  var rowsAll = [];
  for(var j=0; j<allergy.length; j++) {
    rowsAll[j] = createDataAll(allergy[j].category, allergy[j].clinical_status, allergy[j].criticality, allergy[j].reaction_exposure_route, allergy[j].reaction_manifestation, allergy[j].reaction_substance);
  }

  const getImmunization = async() => {
    try {
      const responseImm = await fetch(`/immunization/of/${searchData}`, {
        method: "get"
      });
      if(responseImm.status === 200) {
        const resImm = await responseImm.json();
        setImmunization(resImm);
      }
    }
    catch(e3) {
      console.log(e3);
    }
  }

  var rowsImm = [];
  for(var k=0; k<immunization.length; k++) {
    rowsImm[k] = createDataImm(immunization[k].funding_source, immunization[k].reason_code, immunization[k].report_origin, immunization[k].route, immunization[k].site, immunization[k].target_disease);
  }

  const getProblem = async() => {
    try {
      const responsePro = await fetch(`/problem/of/${searchData}`, {
        method: "get"
      });
      if(responsePro.status === 200) {
        const resPro = await responsePro.json();
        setProblem(resPro);
      }
    }
    catch(e3) {
      console.log(e3);
    }
  }

  var rowsPro = [];
  for(var l=0; l<problem.length; l++) {
    rowsPro[l] = createDataPro(problem[l].body_site, problem[l].category, problem[l].clinical_status, problem[l].code, problem[l].reaction_severity, problem[l].severity);
  }

  const getBMI = async() => {
    try {
      const responseBMI = await fetch(`/bmi/of/${searchData}`, {
        method: "get"
      });
      if(responseBMI.status === 200) {
        const resBMI = await responseBMI.json();
        setBMI(resBMI);
      }
    }
    catch(e3) {
      console.log(e3);
    }
  }

  function BMICalculator(height, weight) {

    var bmi = (weight/height/height)*10000;

    return bmi;
  }

  const dataBMI = [];
  for(var a = 0; a<bmi.length; a++) {
    dataBMI[a] = bmi[a];

    dataBMI[a].bmi = BMICalculator(bmi[a].height, bmi[a].weight).toFixed(1);
    dataBMI[a].max_bmi = 24.9;
    dataBMI[a].min_bmi = 18.5;
    dataBMI[a].max_chl = 200;
    dataBMI[a].max_bp = 120;
    JSON.stringify(dataBMI[a]);
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
    {data !== '' && (
      <div className="modal-box">
      <AppBar position="static">
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Profile" {...a11yProps(0)} />
        <Tab label="Medication" {...a11yProps(1)} />
        <Tab label="Allergy" {...a11yProps(2)} />
        <Tab label="Immunization" {...a11yProps(3)} />
        <Tab label="Problem" {...a11yProps(4)} />
        <Tab label="Charts" {...a11yProps(5)} />
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
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="medication table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Medicine</StyledTableCell>
            <StyledTableCell align="right">Form</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsMed.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.form}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="allergy table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell align="right">Clinical Status</StyledTableCell>
            <StyledTableCell align="right">Criticality</StyledTableCell>
            <StyledTableCell align="right">Reaction Exposure Route</StyledTableCell>
            <StyledTableCell align="right">Reaction Manifestation</StyledTableCell>
            <StyledTableCell align="right">Reaction Substance</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsAll.map((row) => (
            <StyledTableRow key={row.category}>
              <StyledTableCell component="th" scope="row">
                {row.category}
              </StyledTableCell>
              <StyledTableCell align="right">{row.clinical_status}</StyledTableCell>
              <StyledTableCell align="right">{row.criticality}</StyledTableCell>
              <StyledTableCell align="right">{row.reaction_exposure_route}</StyledTableCell>
              <StyledTableCell align="right">{row.reaction_manifestation}</StyledTableCell>
              <StyledTableCell align="right">{row.reaction_substance}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="immunization table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Funding Source</StyledTableCell>
            <StyledTableCell align="right">Reason Code</StyledTableCell>
            <StyledTableCell align="right">Report Origin</StyledTableCell>
            <StyledTableCell align="right">Route</StyledTableCell>
            <StyledTableCell align="right">Site</StyledTableCell>
            <StyledTableCell align="right">Target Disease</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsImm.map((row) => (
            <StyledTableRow key={row.funding_source}>
              <StyledTableCell component="th" scope="row">
                {row.funding_source}
              </StyledTableCell>
              <StyledTableCell align="right">{row.reason_code}</StyledTableCell>
              <StyledTableCell align="right">{row.report_origin}</StyledTableCell>
              <StyledTableCell align="right">{row.route}</StyledTableCell>
              <StyledTableCell align="right">{row.site}</StyledTableCell>
              <StyledTableCell align="right">{row.target_disease}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="immunization table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Body Site</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Clinical Status</StyledTableCell>
            <StyledTableCell align="right">Code</StyledTableCell>
            <StyledTableCell align="right">Reaction Severity</StyledTableCell>
            <StyledTableCell align="right">Severity</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsPro.map((row) => (
            <StyledTableRow key={row.body_site}>
              <StyledTableCell component="th" scope="row">
                {row.body_site}
              </StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell align="right">{row.clinical_status}</StyledTableCell>
              <StyledTableCell align="right">{row.code}</StyledTableCell>
              <StyledTableCell align="right">{row.reaction_severity}</StyledTableCell>
              <StyledTableCell align="right">{row.severity}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <u><h3>BMI Index</h3></u>
      <br />
      <LineChart
        width={500}
        height={300}
        data={dataBMI}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis/>
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="bmi"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
        strokeWidth={2}
      />
      <Line type="monotone" dataKey="max_bmi" stroke="#82ca9d" fill="true"/>
      <Line type="monotone" dataKey="min_bmi" stroke="#82ca9d" fill="true"/>
      </LineChart>
      <br />
      <br />
      <u><h3>Cholesterol</h3></u>
      <br />
      <LineChart
        width={500}
        height={300}
        data={dataBMI}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis/>
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="cholestrol"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
        strokeWidth={2}
      />
      <Line type="monotone" dataKey="max_chl" stroke="#82ca9d" fill="true"/>
      </LineChart>
      <br />
      <br />
      <u><h3>Blood Pressure</h3></u>
      <br />
      <LineChart
        width={500}
        height={300}
        data={dataBMI}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis/>
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="blood_pressure"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
        strokeWidth={2}
      />
      <Line type="monotone" dataKey="max_bp" stroke="#82ca9d" fill="true"/>
      </LineChart>
      </TabPanel>
      </div>
    )}
    </div>
  );
}