import React, { useState, useEffect } from 'react'
import { Typography, makeStyles, Button } from '@material-ui/core'
import Qrcode from 'qrcode-react'
import { Link } from 'react-router-dom'
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
export default function Pembayaran() {
  const classes = useStyle()

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
          <img
            src='https://lh3.googleusercontent.com/AnrJ_N2jWznePDXmy6C6OESu85tkC3L5bGaeGc0lYdAOjME2lC5suRKk6XeR5_PqC9m2yD5tZiD85B4QaDqV13OEkokAQj1h-IUzDxxp8QnjuPeX4_vKj1SnUl3fHaPxTlT7raKrX1DUwil6VUAeQx6iOXb5gojtkFo1y2pXZrbAuefTdt4NQ1gWhrGxt8FHIxWjEaMZeGli47oH19XB05vdvenqIHtK1-1dojza5iHbaHhgT5ylXN0_aP3123HcBgb7cjrJJL1bboXMdyXT3xWuUulI73ah0sp09mZypgBWDdNwd64A-4EqM4X8Ot2ciFauDQ652MV4fraRLjij9ddapDuR98ySZCL2HVoAGqRRGQJq-mtyOjcXxLNF60N_ttFBDqkZyBkOJOeQbibny66uA5nKzP-D4E7WagCEf7QoanmMJ7Rn3SLDanlIPear5nQqb93pvw3Ba-y1j_ubDZi_KRPjj2eofFC_OpW4YE8Wo5TOn4D0BGPuNb9V5wBRD9xZQ9WTrv8nCCn7ZgV-M_yX6crBNQrrgRakhtmZwglA-7E1ySkCsxUSqigXi8C6Vm6rjSaDOMlu7Z7_GTC_jTKaI-Oz8orS88_nCrQaajKy6jsSfkS9i_kXhOFcMb-4q5rWzYOZjShbmd6s_5py4j9R72i4vvTh7qOoWbNBOtxNBeHyLF-a0lDOl54=w110-h108-no'
            alt=''
            style={{ width: '20vw' }}
          />
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
                Tagihan Listrik
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
                  Rp 210000
                </Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant='h5' className={classes.title}>
                  Saldo :
                </Typography>
                <Typography variant='h5' className={classes.title}>
                  Rp 1000.000
                </Typography>
              </div>
              <Button
                variant='contained'
                color='primary'
                fullWidth
                style={{ marginTop: '1rem' }}
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
