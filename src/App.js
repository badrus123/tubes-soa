import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import Footer from './component/Footer'
import Header from './component/Header'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/gobills/Home'
import Pembayaran from './pages/gobills/Pembayaran'
import History from './pages/gobills/History'
import { TOKEN } from './utils'

const theme = createMuiTheme({
  font: 'muli',
  borderColor: 'rgb(204, 204, 204)',
  palette: {
    primary: {
      main: '#00AA13',
    },
    secondary: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: ['muli'],
    button: {
      textTransform: 'capitalize',
    },
  },
})

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          {TOKEN === undefined ? null : <Header />}
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route
              exact
              path='/'
              component={Login}
              component={TOKEN === undefined ? Login : Home}
            />
            <Route exact path='/pembayaran' component={Pembayaran} />
            <Route exact path='/history' component={History} />
          </Switch>
          <Footer />
        </MuiThemeProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
