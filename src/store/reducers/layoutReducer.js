import * as types from "../actionTypes/index";

const initialState = {
  isCollapsed: false,
  username: ""
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIDEBAR_COLLAPSE:
      return Object.assign({}, state, {
        isCollapsed: true
      });
    case types.SIDEBAR_SPREAD:
      return Object.assign({}, state, {
        isCollapsed: false
      });
    case types.INIT_USERNAME:
      return Object.assign({}, state, {
        username: action.payload.username
      });
    case types.SET_DEFAULT_LAYOUT:
      return {
        isCollapsed: false,
        username: ""
      };
    default:
      return state;
  }
};

export default layoutReducer;
