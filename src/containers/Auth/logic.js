import { createLogic } from 'redux-logic'
import { push } from 'react-router-redux'

import { save, load, remove } from '../../utils/storage';

import { userSchema } from './schema'
import { SIGNIN, SIGNOUT, SIGNUP, SIGNIN_SUCCESS, LOAD_DATA, signinSuccess, signinFailed, signupSuccess, loadDataSuccess } from './actions';


const signinLogic = createLogic({
  type: SIGNIN,
  latest: true,
  warnTimeout: 0,
  async validate ({ action }, allow, reject) {
    const user = action.payload
    try {
      await userSchema.validate(user, { abortEarly: false })
      allow(action)
    } catch (e) {
      reject(signinFailed(e.errors))
    }
  },
  async process ({ api, action }, dispatch, done) {
    const user = action.payload;
    const res = await api.post('/signin', { body: user });

    if (res.status !== 200) {
      const errorMessage = res.err ? res.err.message : 'Error signing in';
      return dispatch(signinFailed([errorMessage]));
    }

    return dispatch(signinSuccess(res.body.user, res.body.token));
  }
});

const signinSuccessLogic = createLogic({
  type: SIGNIN_SUCCESS,
  latest: true,
  async process({ api, action }, dispatch, done) {
    save(action.payload);
    api.jwt(action.payload.token);
    dispatch(push('/notes'));
  }
});

const loadDataLogic = createLogic({
  type: LOAD_DATA,
  async process({ api, action }, dispatch, done) {
    const user = load('user');
    const token = load('token');

    if (user && token) {
      api.jwt(token);
      dispatch(loadDataSuccess(user, token));
    }

    done();
  }
});


const signoutLogic = createLogic({
  type: SIGNOUT,
  async process({ api, action }, dispatch, done) {
    remove('user');
    remove('token');

    api.jwt(null);

    dispatch(push('/signin'));
  }
});

const signupLogic = createLogic({
  type: SIGNUP,
  latest: true,
  warnTimeout: 0,
  async validate ({ action }, allow, reject) {
    const user = action.payload
    try {
      await userSchema.validate(user, { abortEarly: false })
      allow(action)
    } catch (e) {
      reject(signinFailed(e.errors))
    }
  },
  async process ({ api, action }, dispatch, done) {
    const user = action.payload;
    const res = await api.post('/signup', { body: user });

    if (res.status !== 200) {
      const errorMessage = res.err ? res.err.message : 'Error signing up';
      return dispatch(signinFailed([errorMessage]));
    }

    return dispatch(signupSuccess(res.body.user, res.body.token));
  }
});


export default [
  signinLogic,
  signinSuccessLogic,
  loadDataLogic,
  signoutLogic,
  signupLogic
]
