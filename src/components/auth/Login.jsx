import React from "react";
import Form from "../../shared/Form";
import "./auth.scss";
import Joi from "joi";
import Input from "../../shared/Input";
import authService from "../../services/auth.service";
import { NavLink, Redirect } from "react-router-dom";

class Login extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = Joi.object({
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required(),
  });

  doSubmit = async () => {
    try {
      await authService.login(this.state.data.email, this.state.data.password);
      this.props.history.push("/");
    } catch (error) {
      this.setState({ errors: { email: error.message } });
    }
  };
  render() {
    const { errors } = this.state;
    if (authService.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div
        className="auth 
      card border-theme bg-theme text-theme shadow">
        <div className="text-center h1">
          <i>Auto Rentals</i>
        </div>
        <form onSubmit={this.submitHandler}>
          <Input
            name="email"
            type="email"
            label="Email"
            onChange={this.inputChangeHandler}
            error={errors}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            onChange={this.inputChangeHandler}
            error={errors}
          />
          <button
            type="submit"
            className="btn btn-block bg-theme-light btn-theme text-theme btn-md p-3 mt-3">
            Login
          </button>
        </form>
        <p className="small mb-0 mt-2">
          Don't have an account? <NavLink to="/register">Create now</NavLink>
        </p>
      </div>
    );
  }
}

export default Login;
