import * as types from "../actionTypes/index";

const initialState = {
  isAuth: false,
  authToken: ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH:
      return Object.assign({}, state, {
        isAuth: true,
        authToken: action.payload
      });
    case types.AUTH_NOT:
      return Object.assign({}, state, {
        isAuth: false,
        authToken: ""
      });
    default:
      return state;
  }
};

export default authReducer;
