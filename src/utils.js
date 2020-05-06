import Cookies from 'js-cookie'
import JWTDecode from 'jwt-decode'

let Token = Cookies.get('_q')
if (Token !== undefined) {
  const exp = JWTDecode(Token)
  const current_time = new Date().getTime() / 1000

  if (exp.exp < current_time) {
    Cookies.remove('_q')
  }
}

export const TOKEN = Token
