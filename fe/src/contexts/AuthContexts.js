// Quan ly trang thai dang nhap, dang xuat, dang ky, xac thuc tu nguoi dung
import { createContext, useReducer } from "react";
import axios from "axios";
import { authReducer } from "../reducers/authReducer";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./constants";

export const AuthContexts = createContext();

const AuthContextsProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });

  // Login
  const loginUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/login`, userForm);
      if (response.data.success)
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );

      return response.data;
    } catch (err) {
      if (err.response.data) return err.response.data;
      else return { success: false, message: err.message };
    }
  };

  //Context data
  const authContextData = { loginUser };

  // Return Provider
  return (
    <AuthContexts.Provider value={authContextData}>
      {children}
    </AuthContexts.Provider>
  );
};

export default AuthContextsProvider;
