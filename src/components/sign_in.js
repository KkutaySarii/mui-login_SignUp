import React from 'react';
import Paper from '@material-ui/core/Paper';
import pic from "./images/vector.png";
import { Button, Grid, Link, Typography, Box, FormControl, InputLabel, OutlinedInput, IconButton } from '@material-ui/core';
import GoogleButton from 'react-google-button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from "@mui/material/InputAdornment";
import { purple } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';

const ColorButton = withStyles((t) => ({
    root: {
        width: '100%',
        color: t.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    },
}))(Button);

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red' ,
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
})(TextField);
export const Login = (isDarkTheme) => {
    const useStyles = makeStyles(() => ({
        root: {
            '& > *': {
                width: '100%'
            },
        },

        paperRoot: {
            backgroundColor: isDarkTheme ? '#232323' : '#FFFFFFF',
            padding: "40px 72px 37px 72px",
            minWidth: "400px",
            color: isDarkTheme ? '#FFFFFF' : '#121212',
        },
    }));
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Paper className={classes.paperRoot} elevation={10} >
            <Grid container direction='column' justifyContent='center' alignItems='stretch' spacing={2}>
                <Grid item align='center'>
                    <Box >
                        <img src={pic} alt="vec" />
                    </Box>
                </Grid>
                <Grid item>
                    <Typography align='center' variant="h2">Welcome!</Typography>
                </Grid>
                <Grid item>
                    <Typography align='center'>Create Components / UI Library from design.</Typography>
                </Grid>
                <Grid item >
                    <GoogleButton style={{ width: '100%' }} onClick={() => { console.log('Google Button clicked') }} />
                </Grid>
                <Grid item>
                    <Divider variant='middle' />
                </Grid>
                <Grid item>
                    <CssTextField id="email" label="Email address" variant="outlined" margin='normal' color='secondary' fullWidth></CssTextField>
                </Grid>
                <Grid item>
                    <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                </Grid>
                <Grid item align='left'>
                    <Link
                        href='#'
                        style={{
                            color: purple[500],
                        }}
                        component="button"
                        variant="body2"
                    >
                        Forgot Password?
                    </Link>
                </Grid>
                <Grid item>
                    <Box mt={2}>
                        <ColorButton variant="contained" color="primary" fullWidth>
                            Login
                        </ColorButton>
                    </Box>
                </Grid>
                <Grid item align="left">
                    <span>Don’t have an account? </span>
                    <Link
                        style={{
                            color: purple[500],
                        }}
                        component="button"
                        variant="body2"
                        onClick={() => {
                            console.info("I'm a forget.");
                        }}
                    >
                        Sign up?
                    </Link>
                </Grid>
            </Grid>
        </Paper>
    )
}


