import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userSigninReducer,
  userSignupReducer,
  userSignoutReducer,
  createUserProfileReducer,
  getUserProfileReducer,
  uploadUserProfileReducer,
  updateUserInfoReducer,
  getChatUserReducer,
  createChatUserReducer,
} from "./reducers/usersReducer";

import { toggleNavReducer } from "./reducers/uiReducers";

const middleware = [thunk];

const reducers = combineReducers({
  userSignup: userSignupReducer,
  userSignin: userSigninReducer,
  userSignout: userSignoutReducer,
  createProfile: createUserProfileReducer,
  userProfile: getUserProfileReducer,
  imageUpload: uploadUserProfileReducer,
  updateUserInfo: updateUserInfoReducer,
  getChatUser: getChatUserReducer,
  createChatUser: createChatUserReducer,
  navToggle: toggleNavReducer,
});

const initialState = {};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
