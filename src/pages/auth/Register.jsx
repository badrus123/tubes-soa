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
import axios from 'axios'
import { withRouter } from 'react-router-dom'

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
    alignItems: 'flex-end',
  },
}))
function Register(props) {
  const classes = useStyle()
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    nohp: '',
  })

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.value })
  }
  const handleSubmit = async (event) => {
    try {
      const response = await axios.post(
        `https://api-gobills.herokuapp.com/api/v1/register`,
        {
          name: state.name,
          email: state.email,
          password: state.password,
          password_confirmation: state.confirm_password,
          notelp: state.nohp,
        },
      )

      props.history.push({
        pathname: '/login',
        state: {
          data: response.data,
        },
      })
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
          <Typography variant='h4'>Sign Up</Typography>
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
                Nama
              </Typography>
              <TextField
                variant='outlined'
                color='primary'
                type='text'
                className={classes.TextField}
                fullWidth
                onChange={handleChange('name')}
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
            <div className={classes.formControl}>
              <Typography variant='h6' className={classes.title}>
                Konfirmasi Password
              </Typography>
              <TextField
                variant='outlined'
                color='primary'
                type='password'
                className={classes.TextField}
                fullWidth
                onChange={handleChange('confirm_password')}
              />
            </div>
            <div className={classes.formControl}>
              <Typography variant='h6' className={classes.title}>
                No Hp
              </Typography>
              <TextField
                variant='outlined'
                color='primary'
                type='text'
                className={classes.TextField}
                fullWidth
                onChange={handleChange('nohp')}
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
          </Paper>
          <img src={bgGojek} alt='background' />
        </div>
      </div>
    </div>
  )
}

export default withRouter(Register)
