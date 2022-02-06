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