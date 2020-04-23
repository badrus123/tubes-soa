import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import gojek from '../assets/gojek.png'
import appstore from '../assets/appstore.png'

const useStyle = makeStyles(() => ({
  root: {
    backgroundColor: '#E2E2E2',
    height: '400px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px',
  },
  appstore: {
    width: '10%',
  },
}))
const Footer = () => {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      <img src={gojek} alt='gojek' />
      <div>
        <Typography variant='h6'>About us</Typography>
        <Typography variant='body1'>Blog</Typography>
        <Typography variant='body1'>Career</Typography>
        <Typography variant='body1'>Blog</Typography>
        <Typography variant='body1'>Career</Typography>
        <Typography variant='body1'>Blog</Typography>
        <Typography variant='body1'>Career</Typography>
      </div>
      <div>
        <Typography variant='h6'>About us</Typography>
        <Typography variant='body1'>Blog</Typography>
        <Typography variant='body1'>Career</Typography>
        <Typography variant='body1'>Blog</Typography>
        <Typography variant='body1'>Career</Typography>
        <Typography variant='body1'>Blog</Typography>
        <Typography variant='body1'>Career</Typography>
      </div>
      <img src={appstore} alt='appstore' className={classes.appstore} />
    </div>
  )
}
export default Footer
