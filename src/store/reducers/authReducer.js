import * as types from "../actionTypes/index";

const initialState = {
  user: null,
  isAuth: false,
  authToken: "",
  history: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH:
      return Object.assign({}, state, {
        user: action.payload.user,
        isAuth: true,
        authToken: action.payload.token,
        history: action.payload.history
      });
    case types.AUTH_NOT:
      return Object.assign({}, state, {
        user: null,
        isAuth: false,
        authToken: "",
        history: null
      });
    default:
      return state;
  }
};

export default authReducer;
