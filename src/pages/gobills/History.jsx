import React from 'react'
import { makeStyles, Typography, Paper } from '@material-ui/core'
import Qrcode from 'qrcode-react'

const useStyle = makeStyles(() => ({
  root: {
    padding: '50px',
  },
  paper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '24px',
    alignItems: 'center',
    marginTop: '1rem',
  },
}))

export default function History() {
  const classes = useStyle()
  const data = [1, 2, 3]
  return (
    <div className={classes.root}>
      <Typography variant='h4'>Riwayat Pembayaran</Typography>

      {data.map((res, i) => {
        return (
          <Paper className={classes.paper} key={i}>
            <div>
              <Typography variant='h4'>Pembayaran Listrik</Typography>
              <Typography variant='h6'>Total Rp500.000</Typography>
            </div>
            <Qrcode
              value='http://instagram.com/badh_rush/'
              size={100}
              fgColor='#000'
              bgColor='white'
              logo='https://bilba.go-jek.com/dist/img/page/gopay/features/GO-BILLS.png'
              logoWidth={50}
            />
          </Paper>
        )
      })}
    </div>
  )
}
