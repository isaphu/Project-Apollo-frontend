import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import { login } from '../../../api/auth';
import { setToken } from '../../../services/localStorageServices';

//CSS 

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  rootAlert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    marginTop: 10
  }
}));




export default function SignInSide() {

  const classes = useStyles();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const history = useHistory();

  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch();
  
  const submitLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await login(username,password)
          dispatch({
            type: 'LOGIN',
            payload: {user: res.data.user}
          })
      setToken(res.data.token)
      history.push('/myHome')
    } catch(err){
      setError(err.response.data)
      setTimeout(() => setError(null), 10000)
    }
  }
  
  const handleInputChange = (e) => {
    if(e.target.name === 'username') {
  setUsername(e.target.value)
    }
    if(e.target.name === 'password') {
  setPassword(e.target.value)
    }
  }


  return (
    <>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField 
              onChange={(e) => handleInputChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Login Name"
              name="username"
              autoComplete="username"
              autoFocus
              />
            <TextField
              onChange ={(e) => handleInputChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              />

              {error &&
                <div className={classes.rootAlert}>
                <Alert severity="error" variant="outlined">
                  <AlertTitle>Error</AlertTitle>
              {error}
                </Alert>
              </div>
              }
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => submitLogin(e)}
              >
              Sign In
            </Button>
            <Box mt={5}>
              
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    </>
  );
}
