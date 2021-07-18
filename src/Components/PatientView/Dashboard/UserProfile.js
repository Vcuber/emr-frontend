import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {UserContext} from '../../../libs/userContext';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: 8,
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
}));

function UserProfile() {

    const classes = useStyles();

    const [data, setData] = useState('');
    const [data2, setData2] = useState('');

    const res = useContext(UserContext);

    const getUser = async(data) => {

        try {
          const response2 = await fetch(`/user/${data.user_id}`, {
            method: "get"
          });
          if(response2.status === 200) {
            const data2 = await response2.json();
            console.log(data2);
            setData2(data2);
          }
        }
        catch(e2) {
          console.log(e2);
        }
      }

      useEffect(
          () => {
            const getProfile = async() => {
              try {
                  const response1 = await fetch(`/patient/${res.loginRes.entity_id}`, {
                      method: "get"
                    });
                    if(response1.status === 200) {
                      const data = await response1.json();
                      setData(data);
                      getUser(data);
                    }
                    else {
                      window.alert("Patient does not exist!");
                    }
              }
              catch(e1) {
                  console.log(e1);
              }
          };
          getProfile();
          }, []);
    

    return (
        <div>
        <br />
        <br />
        <br />
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Patient ID: {res.loginRes.entity_id}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Full Name: {data2.fullname}</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Address: {data2.address}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Date of Birth: {data2.dob}</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Blood Group: {data2.blood_group}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Email ID: {data2.email}</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Gender: {data2.gender}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Aadhar Number: {data2.aadhar}</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Phone Number: {data2.phone}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Contact's Name: {data.contact_name}</Paper>
          </Grid>
        </Grid><Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Contact's Number: {data.contact_number}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} >Contact's Relationship: {data.contact_relationship}</Paper>
          </Grid>
        </Grid>
        </div>
    )
}

export default UserProfile
