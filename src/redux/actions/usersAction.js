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

import firebase from "../../firebase";
import axios from "axios";

// Sign up user using email and password

export const userSignup = (user) => (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST });
  firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then((snapshot) => {
      snapshot.user.updateProfile({
        displayName: user.name,
      });

      const userProfile = {
        id: firebase.auth().currentUser.uid,
        name: user.name,
        email: user.email,
      };

      dispatch(createUserProfile(userProfile));
    })
    .then(() => dispatch({ type: USER_SIGNUP_SUCCESS }))
    .catch((error) =>
      dispatch({ type: USER_SIGNUP_FAIL, payload: error.message })
    );
};

// Sign up user using google auth

export const goolgeAuthSignUp = (firstTime) => (dispatch) => {
  dispatch({ type: firstTime ? USER_SIGNUP_REQUEST : USER_SIGNIN_REQUEST });
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const profileUser = {
        id: result.user.uid,
        email: result.user.email,
        name: result.user.displayName,
      };

      if (firstTime) dispatch(createUserProfile(profileUser));
    })
    .then(() =>
      dispatch({ type: firstTime ? USER_SIGNUP_SUCCESS : USER_SIGNIN_SUCCESS })
    )
    .catch((error) =>
      dispatch({
        type: firstTime ? USER_SIGNUP_FAIL : USER_SIGNIN_FAIL,
        payload: error.message,
      })
    );
};

// user sign in
export const userSignin = (user) => (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST });

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(() => dispatch({ type: USER_SIGNIN_SUCCESS }))
    .catch((error) =>
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.message })
    );
};

// user sign out
export const userSignout = (history) => (dispatch) => {
  dispatch({ type: USER_SIGNOUT_REQUEST });
  firebase
    .auth()
    .signOut()
    .then(() => dispatch({ type: USER_SIGNOUT_SUCCESS }))
    .then(() => history.push("/"))
    .catch((error) =>
      dispatch({ type: USER_SIGNOUT_FAIL, payload: error.message })
    );
};

// partly create user profile
export const createUserProfile = (user) => (dispatch) => {
  dispatch({ type: CREATE_USER_PROFILE_REQUEST });
  firebase
    .firestore()
    .collection("users")
    .doc(user.id)
    .set({
      name: user.name,
      email: user.email,
    })
    .then(() => dispatch({ type: CREATE_USER_PROFILE_SUCCESS }))
    .catch((error) =>
      dispatch({ type: CREATE_USER_PROFILE_FAIL, payload: error.message })
    );
};

// get user profile information
export const getUserProfile = (id) => (dispatch) => {
  dispatch({ type: GET_USER_PROFILE_REQUEST });
  firebase
    .firestore()
    .collection("users")
    .doc(id)
    .get()
    .then((user) => {
      if (!user.exists) {
        dispatch({ type: GET_USER_PROFILE_FAIL, payload: "Profile error" });
      } else {
        dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: user.data() });
      }
    })
    .catch((error) =>
      dispatch({ type: GET_USER_PROFILE_FAIL, payload: error.message })
    );
};

export const uploadUserProfileImage = (file) => (dispatch) => {
  dispatch({ type: UPLOAD_IMAGE_REQUEST });

  const currentUser = firebase.auth().currentUser;

  const randomNumber = Math.random().toString(36);

  const imageName = `${currentUser.displayName}-${randomNumber}`;

  const imagePath = `images/${currentUser.uid}/${imageName}`;

  const upload = firebase.storage().ref().child(imagePath).put(file);

  const uploadProgress = (snapshot) => {};

  const uploadCompleted = () => {
    upload.snapshot.ref.getDownloadURL().then((snapshot) => {
      firebase.auth().currentUser.updateProfile({
        photoURL: snapshot,
      });
      dispatch(updateProfileUrl(snapshot));
      dispatch({ type: UPLOAD_IMAGE_SUCCESS });
    });
  };

  const uploadError = (snapshot) =>
    dispatch({ type: UPLOAD_IMAGE_FAIL, payload: snapshot });
  upload.on("state_changed", uploadProgress, uploadError, uploadCompleted);
};

export const resetUserState = () => (dispatch) => {
  dispatch({ type: RESET_USER_STATE });
};

export const updateProfileUrl = (photoUrl) => (dispatch) => {
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .update({ photoUrl })
    .then(() => console.log("Document was updated successfully"))
    .catch((error) => console.log(error));
};

export const updateUserProfileInfo = (userInfo, history) => (dispatch) => {
  dispatch({ type: UPDATE_USER_REQUEST });
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .update(userInfo)
    .then(() => {
      firebase.auth().currentUser.updateProfile({
        displayName: userInfo.name,
      });
      dispatch({ type: UPDATE_USER_SUCCESS });
    })
    .then(() => history.push("/profile"))
    .catch((error) =>
      dispatch({ type: UPDATE_USER_FAIL, payload: error.message })
    );
};

export const getChatUser = (user) => (dispatch) => {
  dispatch({ type: GET_CHATUSER_REQUEST });
  axios
    .get("https://api.chatengine.io/users/me/", {
      headers: {
        "Project-ID": process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID,
        "User-Name": user.email,
        "User-Secret": user.currentId,
      },
    })
    .then(() => dispatch({ type: GET_CHATUSER_SUCCESS }))
    .catch((error) => {
      dispatch({
        type: GET_CHATUSER_FAIL,
        payload: error.response,
      });
      dispatch(createChatUser(user));
    });
};

export const createChatUser = (user) => (dispatch) => {
  dispatch({ type: CREATE_CHATUSER_REQUEST });
  let formdata = new FormData();
  formdata.append("email", user.email);
  formdata.append("username", user.email);
  formdata.append("secret", user.currentId);
  formdata.append("first_name", user.name);
  axios
    .post("https://api.chatengine.io/users/", formdata, {
      headers: {
        "private-key": process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY,
      },
    })
    .then(() => dispatch({ type: CREATE_CHATUSER_SUCCESS }))
    .catch((error) => {
      dispatch({
        type: CREATE_CHATUSER_FAIL,
        payload: error.response.data.message,
      });
    });
};
