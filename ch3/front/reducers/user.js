export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
}

export const loginAction = (data) => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(loginRequestAction());
    axois.post('/api/login')
      .then((res) => {
        dispatch(loginSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(loginFailureAction(err));
      })
  }
}

export const loginRequestAction = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data,
  }
}

export const loginSuccessAction = () => {
  return {
    type: 'LOG_IN_SUCCESS',
  }
}

export const loginFailureAction = () => {
  return {
    type: 'LOG_IN_FAILURE',
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;