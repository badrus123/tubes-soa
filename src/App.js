import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
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
  console.log(TOKEN)

  return (
    <div>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          {TOKEN === undefined ? null : <Header />}
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route
              exact
              path='/home'
              render={() =>
                TOKEN !== undefined ? (
                  <Home />
                ) : (
                  <Redirect
                    to={{
                      pathname: '/login',
                      state: {
                        active: 'login',
                      },
                    }}
                  />
                )
              }
            />
            <Route
              exact
              path='/pembayaran'
              render={() =>
                TOKEN !== undefined ? (
                  <pembayaran />
                ) : (
                  <Redirect
                    to={{
                      pathname: '/login',
                      state: {
                        active: 'login',
                      },
                    }}
                  />
                )
              }
            />
            <Route
              exact
              path='/history'
              render={() =>
                TOKEN !== undefined ? (
                  <History />
                ) : (
                  <Redirect
                    to={{
                      pathname: '/login',
                      state: {
                        active: 'login',
                      },
                    }}
                  />
                )
              }
            />
            <Redirect from='/' to='/login' />
          </Switch>
          <Footer />
        </MuiThemeProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
