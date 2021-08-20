import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNOUT_REQUEST,
  USER_SIGNOUT_SUCCESS,
  USER_SIGNOUT_FAIL,
  RESET_USER_STATE,
  CREATE_USER_PROFILE_REQUEST,
  CREATE_USER_PROFILE_SUCCESS,
  CREATE_USER_PROFILE_FAIL,
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  GET_CHATUSER_REQUEST,
  GET_CHATUSER_SUCCESS,
  GET_CHATUSER_FAIL,
  CREATE_CHATUSER_REQUEST,
  CREATE_CHATUSER_SUCCESS,
  CREATE_CHATUSER_FAIL,
} from "../constants/usersContants";

export const userSignupReducer = (
  state = { loading: false, error: null },
  action
) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case USER_SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESET_USER_STATE:
      return {
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};

export const userSigninReducer = (
  state = { loading: false, error: null },
  action
) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case RESET_USER_STATE:
      return {
        error: null,
        loading: false,
      };
    case USER_SIGNIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userSignoutReducer = (
  state = { loading: false, error: null },
  action
) => {
  switch (action.type) {
    case USER_SIGNOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_SIGNOUT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case RESET_USER_STATE:
      return {
        error: null,
        loading: false,
      };
    case USER_SIGNOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const createUserProfileReducer = (
  state = { loading: false, error: null },
  action
) => {
  switch (action.type) {
    case CREATE_USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case RESET_USER_STATE:
      return {
        error: null,
        loading: false,
      };
    case CREATE_USER_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getUserProfileReducer = (
  state = { loading: false, error: null, user: {} },
  action
) => {
  switch (action.type) {
    case GET_USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case RESET_USER_STATE:
      return {
        error: null,
        loading: false,
        user: {},
      };
    case GET_USER_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const uploadUserProfileReducer = (
  state = { loading: false, error: null },
  action
) => {
  switch (action.type) {
    case UPLOAD_IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case RESET_USER_STATE:
      return {
        error: null,
        loading: false,
      };
    case UPLOAD_IMAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateUserInfoReducer = (
  state = { loading: false, error: null },
  action
) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESET_USER_STATE:
      return {
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};
export const getChatUserReducer = (
  state = { loading: false, error: null },
  action
) => {
  switch (action.type) {
    case GET_CHATUSER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CHATUSER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case RESET_USER_STATE:
      return {
        error: null,
        loading: false,
      };
    case GET_CHATUSER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const createChatUserReducer = (
  state = { loading: false, error: null },
  action
) => {
  switch (action.type) {
    case CREATE_CHATUSER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_CHATUSER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case RESET_USER_STATE:
      return {
        error: null,
        loading: false,
      };
    case CREATE_CHATUSER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
