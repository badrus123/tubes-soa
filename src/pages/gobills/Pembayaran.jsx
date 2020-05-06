import React, { useState, useEffect } from 'react'
import { Typography, makeStyles, Button } from '@material-ui/core'
import Qrcode from 'qrcode-react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import { TOKEN } from '../../utils'

const useStyle = makeStyles(() => ({
  root: {
    padding: '50px',
  },
  title: {
    marginTop: '1rem',
    fontWeight: 'bold',
  },
  flex: {
    display: 'flex',
    alignItems: 'flex-start',
  },
}))
function Pembayaran(props) {
  const classes = useStyle()
  const data = props.location.state.data
  const handlePayment = () => {
    axios
      .post(
        `https://api-gobills.herokuapp.com/api/v1/tagihan`,
        {
          jumlah_tagihan: data && data.harga,
          id_detail: data && data.id_detail,
        },
        { headers: { Authorization: `Bearer ${TOKEN}` } },
      )
      .then((response) => {
        props.history.push({
          pathname: '/history',
        })
      })
  }

  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <div
          style={{
            width: '16px',
            height: '50px',
            borderRadius: '36px',
            backgroundColor: '#0052A2',
          }}
        />
        <Typography variant='h4' className={classes.title}>
          Detail Tagihan
        </Typography>
      </div>
      <div
        style={{
          marginTop: '2rem',
          marginLeft: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div className={classes.flex}>
          <img src={data && data.gambar} alt='' style={{ width: '20vw' }} />
          <div style={{ marginLeft: '2rem' }}>
            <div className={classes.flex}>
              <div
                style={{
                  width: '16px',
                  height: '50px',
                  borderRadius: '36px',
                  backgroundColor: '#0052A2',
                }}
              />
              <Typography variant='h4' className={classes.title}>
                {data && data.nama_produk} - {data && data.jenis_produk}
              </Typography>
            </div>
            <div style={{ marginTop: '3rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant='h5' className={classes.title}>
                  Total :
                </Typography>
                <Typography variant='h5' className={classes.title}>
                  Rp {data && data.harga}
                </Typography>
              </div>

              <Button
                variant='contained'
                color='primary'
                fullWidth
                style={{ marginTop: '1rem' }}
                onClick={handlePayment}
              >
                Bayar
              </Button>
            </div>
          </div>
        </div>
        <div
          style={{
            marginLeft: '3rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Qrcode
            value='http://instagram.com/badh_rush/'
            size={300}
            fgColor='#000'
            bgColor='white'
            logo='https://bilba.go-jek.com/dist/img/page/gopay/features/GO-BILLS.png'
            logoWidth={100}
          />
          <Button
            variant='contained'
            color='primary'
            fullWidth
            style={{ marginTop: '2rem' }}
            component={Link}
            to='/history'
          >
            Riwayat Pembayaran
          </Button>
        </div>
      </div>
    </div>
  )
}
export default withRouter(Pembayaran)
