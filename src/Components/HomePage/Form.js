import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useAppContext } from '../../libs/contextLib';
import { UserContext } from '../../libs/userContext';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
        },
        '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
        },
    },
}));

function Form({handleClose}) {

    const classes = useStyles();
    
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const { userHasAuthenticated } = useAppContext();
    const resabc = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userId);
        console.log(password);

        const formdata = new FormData();
        formdata.append("username", userId);
        formdata.append("password", password);

        try {
            const res = await fetch("/auth/token", {
                body: formdata, 
                method:"post"
            });
            if(res.status === 200) {
                const data = await res.json();
                resabc.setLoginRes(data);
                switch(data.entity_type) {
                    case "":
                        history.push("/");
                        break;
                    case "Practitioner":
                        userHasAuthenticated(true);
                        localStorage.setItem("Authenticated", "Doctor"); 
                        history.push("/DoctorDashboard");
                        break;
                    case "Careteam":
                        userHasAuthenticated(true);
                        localStorage.setItem("Authenticated", "Careteam");
                        break;
                    case "Admin":
                        userHasAuthenticated(true);
                        localStorage.setItem("Authenticated", "Admin");
                        break;
                    case "Patient":
                        userHasAuthenticated(true);
                        localStorage.setItem("Authenticated", "Patient");
                        history.push("/PatientDashboard");
                        break;
                    default:
                        history.push("/"); 
                        break;
                }
            }
        } catch(e1) {
            console.log(e1);
        }
    };

    return (
        <div>
            <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
                label="User ID"
                variant="filled"
                required
                value={userId}
                onChange={e => setUserId(e.target.value)}
            />
            <TextField
                label="Password"
                variant="filled"
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <div>
                <Button variant="contained" onClick={handleClose}>
                Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                Signup
                </Button>
            </div>
            </form>
        </div>
    );
};

export default Form
