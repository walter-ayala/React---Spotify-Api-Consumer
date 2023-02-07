import { AUTH_SUCCESS } from './authActions'

const INITIAL_STATE = {
  token: null,
  token_type: null,
  expires_at: null,
}

const authSuccess = (state, { payload }) => ({
  ...state,
  ...payload
})

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_SUCCESS: return authSuccess(state, action)
    default:
      return state
  }
}

export default reducer
