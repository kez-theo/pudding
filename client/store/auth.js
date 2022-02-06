import axios from "axios";
import { auth } from '../firebaseAuth/firebase'
import firebase from "firebase";


/**
 * ACTION TYPES
 */
const SET_USER = "SET_USER";

/**
 * ACTION CREATORS
 */
const setUser = (user) => ({ type: SET_USER, user });

export const logout = () => {
  return {
    type: SET_USER,
    user: {},
  };
};

/**
 * THUNK CREATORS
 */
export const setUserThunk = () => async (dispatch) => {
  const idToken = await auth.currentUser.getIdToken(true);
  if (idToken) {
    const { data } = await axios.get(``, {
      headers: {
        authtoken: idToken,
      },
    });
    return dispatch(setUser(data));
  }
};

export const updateUserThunk =
  ({ firstName, lastName }) =>
  async (dispatch) => {
    try {
      const idToken = await auth.currentUser.getIdToken(true);
      if (idToken) {
        const { data } = await axios.put(
          ``,
          {
            firstName,
            lastName,
          },
          {
            headers: {
              authtoken: idToken,
            },
          }
        );
        dispatch(setUser(data));
        return true;
      }
    } catch (err) {
      console.log("THUNK ERROR: ", err);
    }
  };

export const updatePassword = async (password) => {
  try {
    const user = await auth.currentUser;
    await user.updatePassword(password);
    return true;
  } catch (err) {
    console.log("UPDATE PASSWORD: err");
    return err.message;
  }
};

export const authenticateSignUp =
  ({ email, firstName, lastName, password, method }) =>
  async (dispatch) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const { data } = await axios.post(``, {
        id: user.id,
        email,
        firstName,
        lastName,
      });
      if (verify(data, dispatch)) return true;
    } catch (err) {
      console.log(err);
      return err.message;
    }
  };

export const authenticateLogin = ({ email, password }) =>
  async (dispatch) => {
    try {
      const { user } = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      const { data } = await axios.post(`/api/users/:id`, {
        uid: user.uid,
      });
      if (verify(data, dispatch)) {
        return true;
      }
    } catch (err) {
      console.log(err);
      return err.message;
    }
  };

const initialState = {
  user: {},
};

/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
}