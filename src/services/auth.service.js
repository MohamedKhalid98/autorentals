import jwtDecode from "jwt-decode";
import axios from "axios";
import { setJwt } from "./httpService.service";
const apiEndPoint = "/auth";
const tokenKey = "currentUser";

setJwt(getJwt());

export async function login(email, password) {
  try {
    const { data: jwt } = await axios.post(apiEndPoint, { email, password });
    localStorage.setItem(tokenKey, jwt);
  } catch (error) {
    throw new Error(error.response.data);
  }
}
export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}
export async function logout() {
  localStorage.removeItem(tokenKey);
  window.location = "/";
}
export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}
export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  logout,
  loginWithJwt,
  getCurrentUser,
};
