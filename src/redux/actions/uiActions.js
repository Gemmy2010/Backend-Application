import { SHOW_SIDE_NAV, HIDE_SIDE_NAV } from "../constants/uiContants";

export const showSideNav = () => (dispatch) => {
  dispatch({ type: SHOW_SIDE_NAV });
};

export const hideSideNav = () => (dispatch) => {
  dispatch({ type: HIDE_SIDE_NAV });
};
