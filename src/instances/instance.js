import axios from 'axios'
import empty from '../utils/empty'
import { authSuccess } from '../store/Auth/authActions'
import { initializeStore } from '../store'

const BASE_URL = ""
const CLIENT_ID = ""
const CLIENT_SECRET = ""

const base64 = require('base-64')
const qs = require('qs')

const auth_token = base64.encode(`${CLIENT_ID}:${CLIENT_SECRET}`)

const getAuth = async () => {
  try {
    const token_url = 'https://accounts.spotify.com/api/token'
    const data = qs.stringify({ 'grant_type': 'client_credentials' })

    const response = await axios.post(token_url, data, {
      headers: {
        'Authorization': `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const instance = axios.create({
  baseURL: BASE_URL,
})

const requestInterceptor = async (config) => {
  const store = initializeStore(undefined)
  const { auth } = await store.getState()
  const expirationDate = auth.expires_at
  let authToken = auth.token
  let spotifyCredentials

  if (new Date(expirationDate) <= new Date()) {
    spotifyCredentials = await getAuth()
  }

  const token = !empty(spotifyCredentials) ? spotifyCredentials.access_token : authToken

  config.headers = {
    'Authorization': `Bearer ${token}`
  }
  if (!empty(spotifyCredentials)) {
    const expires_at = new Date(new Date().getTime() + spotifyCredentials.expires_in * 1000)
    store.dispatch(authSuccess({ token: spotifyCredentials.access_token, expires_at, token_type: spotifyCredentials.token_type }))
  }
  return config
}

instance.interceptors.request.use(requestInterceptor)

export default instance