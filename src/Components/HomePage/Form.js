import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

    const handleSubmit = e => {
        e.prevenDefault();
        console.log(userId, password);
        handleClose();
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
