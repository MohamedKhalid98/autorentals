import axios from "axios";
import authService from "./auth.service";

export async function register(user) {
  try {
    console.log(user);
    const response = await axios.post("/users", user);
    authService.loginWithJwt(response.headers["x-auth-token"]);
  } catch (error) {
    throw new Error(error.response.data);
  }
}

export default {
  register,
};
