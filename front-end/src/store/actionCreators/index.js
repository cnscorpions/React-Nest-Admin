import * as types from "../actionTypes/index";

// collaspe sidebar or not
const collapseSidebar = () => ({
  type: types.SIDEBAR_COLLAPSE
});

const spreadSidebar = () => ({
  type: types.SIDEBAR_SPREAD
});

// authenticate or not
const authenticate = () => ({
  type: types.AUTH
});

const unauthenticate = () => ({
  type: types.AUTH_NOT
});

export { collapseSidebar, spreadSidebar, authenticate, unauthenticate };
