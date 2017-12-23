// import { getUser } from 'utils/auth'
import { SIGNIN_SUCCESS, SIGNIN_FAILED, SIGNUP_FAILED, SIGNOUT, LOAD_DATA_SUCCESS } from './actions'

const initialState = {
  user: {},
  errors: [],
  token: '',
  signedIn: false
}

function authReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
    case SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        signedIn: true
      }
    case SIGNIN_FAILED:
      return {
        ...state,
        errors: action.payload,
      }
    case SIGNUP_FAILED:
      return {
        ...state,
        errors: action.payload,
      }
    case SIGNOUT:
      return {
        ...state,
        signedIn: false,
        token: '',
        user: {}
      }
    default:
      return state
  }
}

export default authReducer
