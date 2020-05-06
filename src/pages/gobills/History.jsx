import React, { useState, useEffect } from 'react'
import { makeStyles, Typography, Paper } from '@material-ui/core'
import Qrcode from 'qrcode-react'
import axios from 'axios'
import { TOKEN } from '../../utils'

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
  const [history, setHistory] = useState(null)
  useEffect(() => {
    async function fetchData() {
      const DataProduct = await axios(
        'https://api-gobills.herokuapp.com/api/v1/tagihan',
        { headers: { Authorization: `Bearer ${TOKEN}` } },
      )
      setHistory(DataProduct.data.data)
    }

    fetchData()
  }, [])
  return (
    <div className={classes.root}>
      <Typography variant='h4'>Riwayat Pembayaran</Typography>

      {history &&
        history.map((res, i) => {
          return (
            <Paper className={classes.paper} key={i}>
              <div>
                <Typography variant='h4'>
                  {res.nama_produk} - {res.jenis_produk}
                </Typography>
                <Typography variant='h6'>
                  Total Rp{res.jumlah_tagihan}
                </Typography>
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
