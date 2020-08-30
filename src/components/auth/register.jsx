import React from "react";
import Form from "../../shared/Form";
import "./auth.scss";
import Joi from "joi";
import Input from "../../shared/Input";

class Register extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = Joi.object({
    name: Joi.string().required().min(3),
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required().min(6),
  });

  doSubmit = () => {
    console.log("form submitted");
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="auth card border-theme bg-theme text-theme shadow">
        <div className="text-center h1">
          <i>Auto Rentals</i>
        </div>
        <form onSubmit={this.submitHandler}>
          <Input
            name="name"
            label="Name"
            onChange={this.inputChangeHandler}
            error={errors}
          />
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
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
