import React, { useState } from 'react'
import {
  Typography,
  makeStyles,
  Paper,
  TextField,
  Button,
} from '@material-ui/core'
import bgGojek from '../../assets/bgGojek.png'
import gojek from '../../assets/gojek.png'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'

const useStyle = makeStyles(() => ({
  divHeader: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#c4c4c4',
    width: '100%',
  },
  logo: {
    width: '10%',
  },
  root: {
    backgroundColor: '#343434',
  },
  gr: {
    width: '16px',
    height: '50px',
    backgroundColor: '#00AA13',
    borderRadius: '36px',
  },
  divGr: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    marginBottom: '3rem',
  },
  divRoot: {
    padding: '30px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  paper: {
    padding: '24px',
    backgroundColor: '#262626',
    borderRadius: '31px',
    width: '90%',
    marginRight: '2rem',
  },
  TextField: {
    backgroundColor: '#ffff',
    borderRadius: '36px',
  },
  formControl: {
    marginBottom: '1rem',
    width: '100%',
  },
  title: {
    color: '#fff',
  },
  root2: {
    display: 'flex',
    alignItems: 'center',
  },
  signup: {
    display: 'flex',
    marginTop: '2rem',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#fff',
  },
}))
function Login(props) {
  const classes = useStyle()
  const [state, setState] = useState({ email: '', password: '' })

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.value })
  }
  const handleSubmit = async (event) => {
    try {
      const response = await axios.post(
        `https://api-gobills.herokuapp.com/api/v1/login`,
        {
          email: state.email,
          password: state.password,
        },
      )

      const expireAfter = new Date()
      const expired =
        'expires=' +
        expireAfter.setDate(expireAfter.getDate() + response.data.expires_in) +
        ';'
      const data = '_q=' + response.data.token + ';'
      document.cookie = data + expired
      props.history.push('/')
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className={classes.root}>
      <div className={classes.divHeader}>
        <img src={gojek} alt='logo gojek' className={classes.logo} />
      </div>
      <div className={classes.divRoot}>
        <div className={classes.divGr}>
          <div className={classes.gr} />
          <Typography variant='h4'>Sign In</Typography>
        </div>
        <div className={classes.root2}>
          <Paper className={classes.paper}>
            <div className={classes.formControl}>
              <Typography variant='h6' className={classes.title}>
                Email
              </Typography>
              <TextField
                variant='outlined'
                color='primary'
                type='email'
                className={classes.TextField}
                fullWidth
                onChange={handleChange('email')}
              />
            </div>

            <div className={classes.formControl}>
              <Typography variant='h6' className={classes.title}>
                Password
              </Typography>
              <TextField
                variant='outlined'
                color='primary'
                type='password'
                className={classes.TextField}
                fullWidth
                onChange={handleChange('password')}
              />
            </div>
            <Button
              variant='contained'
              fullWidth
              color='primary'
              onClick={handleSubmit}
            >
              Sign up
            </Button>
            <Typography
              variant='body1'
              className={classes.signup}
              component={Link}
              to='/register'
            >
              Belum punya akun ? Sign Up
            </Typography>
          </Paper>
          <img src={bgGojek} alt='background' />
        </div>
      </div>
    </div>
  )
}
export default withRouter(Login)
