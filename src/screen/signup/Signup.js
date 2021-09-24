import React from "react";
import "./Signup.css";

import { emailValidate, nameValidate, passwordValidate } from "./Validator";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        gender: "",
        interests: "",
      },
      formErrorData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        gender: "",
        interests: "",
      },
    };
  }
  handleChange = (event) => {
    this.setState((prev) => {
      return {
        formData: {
          ...prev.formData,
          [event.target.name]: event.target.value,
        },
      };
    });
  };

  handleSubmit = (e) => {
    const {
      formData: { firstName },
      formData: { lastName },
      formData: { email },
      formData: { password },
      formData: { passwordConfirmation },
    } = this.state;

    e.preventDefault();
    let errorMessage = {};

    if (!nameValidate(firstName)) {
      errorMessage.firstName = "First name required";
    }

    if (!nameValidate(lastName)) {
      errorMessage.lastName = "Last name required";
    }
    if (!emailValidate(email)) {
      errorMessage.email = "The email format is incorrect";
    }

    if (!passwordValidate(password)) {
      errorMessage.password = "The password must have at least 8 characters";
    }

    if (password !== passwordConfirmation) {
      errorMessage.passwordConfirmation = "The passwords don't match";
    }

    if (errorMessage && Object.keys(errorMessage).length > 0) {
      this.setState({
        formErrorData: errorMessage,
      });
    } else {
      this.resetForm();
      window.location.href = "/";
    }
  };

  resetForm = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConformation: "",
      gender: "",
      interests: "",
    });
  };
  render() {
    const { formErrorData } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <header className="home-header">
          <h1 className="home-title">Registration form</h1>
        </header>
        <div class="container" style={{ width: "40%" }}>
          <label for="firsname">
            <b>First Name</b>
          </label>
          <input
            className="user-input"
            id="firstname"
            required
            onChange={this.handleChange}
            type="text"
            placeholder="First name"
            name="firstName"
          />
          {formErrorData && formErrorData.firstName ? (
            <span>{formErrorData.firstName}</span>
          ) : (
            ""
          )}
          <br />
          <label for="lastname">
            <b>Last Name</b>
          </label>

          <input
            className="user-input"
            id="lastname"
            required
            onChange={this.handleChange}
            type="text"
            placeholder="Last name"
            name="lastName"
          />
          {formErrorData && formErrorData.lastName ? (
            <span>{formErrorData.lastName}</span>
          ) : (
            ""
          )}
          <br />
          <label for="email">
            <b>Email</b>
          </label>
          <input
            className="user-input"
            key="email"
            id="email"
            required
            onChange={this.handleChange}
            type="text"
            placeholder="Email"
            name="email"
          />
          {formErrorData && formErrorData.email ? (
            <span>{formErrorData.email}</span>
          ) : (
            ""
          )}
          <br />
          <label for="password">
            <b>Password</b>
          </label>
          <input
            className="user-input"
            id="password"
            required
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
            name="password"
          />
          {formErrorData && formErrorData.password ? (
            <span>{formErrorData.password}</span>
          ) : (
            ""
          )}
          <br />
          <label for="passwrodconfirmation">
            <b>password Confirmation</b>
          </label>
          <input
            className="user-input"
            id="passwordconfirmation"
            required
            onChange={this.handleChange}
            type="password"
            placeholder="Password confirmation"
            name="passwordConfirmation"
          />
          {formErrorData && formErrorData.passwordConfirmation ? (
            <span>{formErrorData.passwordConfirmation}</span>
          ) : (
            ""
          )}
          <div className="gender" onChange={this.handleChange}>
            <input type="radio" value="Male" name="gender" /> Male
            <input type="radio" value="Female" name="gender" /> Female
            <input type="radio" value="Other" name="gender" /> Other
          </div>
          <div>
            <label
              style={{ marginBottom: "20px", fontWeight: "bold" }}
              for="interests"
            >
              Enter your programming experience:{" "}
            </label>
            <div>
              <textarea
                className="user-input"
                style={{ marginBottom: "20px" }}
                name="interests"
                id="interests"
                value={this.state.textAreaValue}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <input style={{ marginBottom: "100px" }} type="submit" />
        </div>
      </form>
    );
  }
}
