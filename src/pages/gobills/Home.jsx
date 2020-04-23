import React, { useState, useEffect } from 'react'
import {
  Typography,
  makeStyles,
  Paper,
  TextField,
  Button,
} from '@material-ui/core'
import promo from '../../assets/promo.png'
import axios from 'axios'
import { TOKEN } from '../../utils'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'
const useStyle = makeStyles(() => ({
  root: {
    padding: '30px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    marginTop: '1rem',
    fontWeight: 'bold',
  },
  gambar: {
    width: '8vw',
  },

  divProduct: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    padding: '24px',
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}))
export default function Home() {
  const classes = useStyle()
  const [product, setProduct] = useState(null)
  useEffect(() => {
    async function fetchData() {
      const DataProduct = await axios(
        'http://tubesweb-env.eba-iqzqkf3k.us-east-2.elasticbeanstalk.com/api/v1/get-all-produk',
        { headers: { Authorization: `Bearer ${TOKEN}` } },
      )
      setProduct(DataProduct.data)
    }

    fetchData()
  }, [])
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  if (product === null) {
    return <div>loading</div>
  }

  return (
    <div className={classes.root}>
      <img src={promo} alt='promom' />
      <Typography variant='h5' className={classes.title}>
        Top-Up dan Tagihan
      </Typography>

      <Carousel responsive={responsive}>
        {product &&
          product.map((res, i) => {
            return (
              <div className={classes.divProduct} key={i}>
                <img
                  src={res.gambar}
                  alt={res.nama_produk}
                  className={classes.gambar}
                />
                <Typography>{res.nama_produk}</Typography>
              </div>
            )
          })}
      </Carousel>
      <Paper className={classes.paper}>
        <Typography variant='body1'>Nomor Meter</Typography>
        <TextField variant='outlined' fullWidth />
        <Button
          variant='contained'
          color='primary'
          component={Link}
          to='/pembayaran'
        >
          Lanjutkan
        </Button>
      </Paper>
    </div>
  )
}
