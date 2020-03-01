import * as types from "../actionTypes/index";

const collapseSidebar = () => ({
  type: types.SIDEBAR_COLLAPSE
});

const spreadSidebar = () => ({
  type: types.SIDEBAR_SPREAD
});

export { collapseSidebar, spreadSidebar };
