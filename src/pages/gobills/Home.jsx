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
import { withRouter } from 'react-router-dom'

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
    cursor: 'pointer',
  },
  paper: {
    padding: '24px',
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}))
function Home(props) {
  const classes = useStyle()
  const [product, setProduct] = useState(null)
  const [kode, setKode] = useState({ id: null, data: null })
  useEffect(() => {
    async function fetchData() {
      const DataProduct = await axios(
        'https://api-gobills.herokuapp.com/api/v1/get-all-produk',
        { headers: { Authorization: `Bearer ${TOKEN}` } },
      )
      setProduct(DataProduct.data.data)
    }

    fetchData()
  }, [])
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
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
  const handleClick = (res) => {
    setKode({ id: res.id_detail, data: res })
  }
  const handlePayment = () => {
    if (kode.id !== null) {
      axios
        .post(
          `https://api-gobills.herokuapp.com/api/v1/kode`,
          {
            id: kode.id,
            kode: kode.data.id_detail,
          },
          { headers: { Authorization: `Bearer ${TOKEN}` } },
        )
        .then((response) => {
          props.history.push({
            pathname: '/pembayaran',
            state: {
              data: response.data.data[0],
            },
          })
        })
    }
  }

  if (product === null) {
    return <div>loading</div>
  }

  console.log(kode)

  // return <div></div>
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
              <div
                className={classes.divProduct}
                key={i}
                onClick={() => handleClick(res)}
                style={{
                  border:
                    kode.id === res.id_detail ? '2px solid #00AA13' : null,
                }}
              >
                <img
                  src={res.gambar}
                  alt={res.nama_produk}
                  className={classes.gambar}
                />
                <Typography>{res.nama_produk}</Typography>
                <Typography>{res.jenis_produk}</Typography>
              </div>
            )
          })}
      </Carousel>
      <Paper className={classes.paper}>
        <Typography variant='body1'>Nomor Meter</Typography>
        <TextField variant='outlined' fullWidth />
        <Button variant='contained' color='primary' onClick={handlePayment}>
          Lanjutkan
        </Button>
      </Paper>
    </div>
  )
}
export default withRouter(Home)
