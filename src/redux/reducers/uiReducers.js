import { SHOW_SIDE_NAV, HIDE_SIDE_NAV } from "../constants/uiContants";

export const toggleNavReducer = (state = { hidden: true }, action) => {
  switch (action.type) {
    case SHOW_SIDE_NAV:
      return {
        hidden: true,
      };
    case HIDE_SIDE_NAV:
      return {
        hidden: false,
      };
    default:
      return state;
  }
};
