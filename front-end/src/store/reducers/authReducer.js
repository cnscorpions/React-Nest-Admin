import * as types from "../actionTypes/index";

const initialState = {
  isAuth: true
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH:
      return {
        isAuth: true
      };
    case types.AUTH_NOT:
      return {
        isAuth: false
      };
    default:
      return state;
  }
};

export default authReducer;
