export const SIGNIN = 'Auth/SIGNIN'
export const SIGNIN_SUCCESS = 'Auth/SIGNIN_SUCCESS'
export const SIGNIN_FAILED = 'Auth/SIGNIN_FAILED'

export const SIGNOUT = 'Auth/SIGNOUT'

export const SIGNUP = 'Auth/SIGNUP'
export const SIGNUP_FAILED = 'Auth/SIGNUP_FAILED'
export const SIGNUP_SUCCESS = 'Auth/SIGNUP_SUCCESS'

export const LOAD_DATA = 'Auth/LOAD_DATA';
export const LOAD_DATA_SUCCESS = 'Auth/LOAD_DATA_SUCCESS';


export function signin (user, from) {
  return {
    type: SIGNIN,
    payload: user,
    meta: {
      from,
    },
  }
}

export function signinSuccess (user, token) {
  return {
    type: SIGNIN_SUCCESS,
    payload: {
      user,
      token
    }
  }
}

export function signinFailed (errors) {
  return {
    type: SIGNIN_FAILED,
    payload: errors,
  }
}

export function signout () {
  return {
    type: SIGNOUT,
  }
}

export function signup (user, from) {
  return {
    type: SIGNUP,
    payload: user,
    meta: {
      from,
    },
  }
}

export function signupFailed (errors) {
  return {
    type: SIGNUP_FAILED,
    payload: errors,
  }
}

export function signupSuccess (user, token) {
  return {
    type: SIGNUP_SUCCESS,
    payload: {user, token},
  }
}

export function loadData() {
  return {
    type: LOAD_DATA
  }
}

export function loadDataSuccess(user, token) {
  return {
    type: LOAD_DATA_SUCCESS,
    payload: {
      user,
      token
    }
  }
}

