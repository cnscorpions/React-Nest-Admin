import * as types from "../actionTypes/index";

const initialState = {
  isCollapsed: false
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIDEBAR_COLLAPSE:
      return {
        isCollapsed: true
      };
    case types.SIDEBAR_SPREAD:
      return {
        isCollapsed: false
      };
    default:
      return state;
  }
};

export default layoutReducer;
