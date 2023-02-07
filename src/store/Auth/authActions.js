export const AUTH_SUCCESS = 'AUTH_SUCCESS'

export const authSuccess = (userInfo) => {
  localStorage.setItem('cloneSpotifyState', JSON.stringify(userInfo))

  return {
    type: AUTH_SUCCESS,
    payload: userInfo,
  }
}

