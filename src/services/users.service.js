import axios from "axios";
import authService from "./auth.service";

export async function register(user) {
  try {
    console.log(user);
    const { data: jwt } = await axios.post("/users", user);
    authService.loginWithJwt(jwt);
  } catch (error) {
    throw new Error(error.response.data);
  }
}

export default {
  register,
};
