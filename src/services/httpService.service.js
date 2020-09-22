import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export function setJwt(jwt) {
  if (jwt) axios.defaults.headers.common["x-auth-token"] = jwt;
}
