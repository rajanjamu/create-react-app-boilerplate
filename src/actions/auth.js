import { authProvider, auth } from "../vendors/firebase";

export const login = (uid) => {
  return { type: "LOGIN", uid };
};

export const startLogin = () => {
  return () => {
    return auth.signInWithPopup(authProvider);
  };
};

export const logout = () => {
  return { type: "LOGOUT" };
};

export const startLogout = () => {
  return () => {
    return auth.signOut();
  };
};
