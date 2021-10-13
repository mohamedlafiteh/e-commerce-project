import React from "react";
import { connect } from "react-redux";
import Header from "../../components/header/Header";

import { validateAllFormFields } from "./Validator";
import { createUser } from "../../store/actions/userAction";
import { stateFields } from "../../screen/constant/stateFields";
import { resetForm } from "./resetForm";
import "./Signup.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stateFields,
      stateFieldsErrors: stateFields,
    };
  }
  handleChange = (event) => {
    this.setState((prev) => {
      return {
        stateFields: {
          formData: {
            ...prev.stateFields.formData,
            [event.target.name]: event.target.value,
          },
        },
      };
    });
  };

  handleSubmit = (e) => {
    const { formData } = this.state.stateFields;
    const results = validateAllFormFields(formData);
    if (results && Object.keys(results).length > 0) {
      this.setState({
        stateFieldsErrors: {
          formData: results,
        },
      });
    } else {
      const { formData } = this.state.stateFields;
      this.props.createUser(formData);
      this.setState(resetForm());

      // window.location.href = "/signin";
    }
  };

  render() {
    const { formData } = this.state.stateFields;
    const { stateFieldsErrors } = this.state;
    return (
      <>
        <Header />
        <h3 style={{ textAlign: "center" }}>Sign up </h3>
        <div className="container" style={{ width: "40%" }}>
          <label htmlFor="firsname">
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
            value={formData.firstName}
          />
          {stateFieldsErrors.formData.firstName && (
            <span className="err">{stateFieldsErrors.formData.firstName}</span>
          )}
          <br />
          <label htmlFor="lastname">
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
            value={formData.lastName}
          />
          {stateFieldsErrors.formData.lastName && (
            <span className="err">{stateFieldsErrors.formData.lastName}</span>
          )}
          <br />
          <label htmlFor="email">
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
            value={formData.email}
          />
          {stateFieldsErrors.formData.email && (
            <span className="err">{stateFieldsErrors.formData.email}</span>
          )}
          <br />
          <label htmlFor="password">
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
            value={formData.password}
          />
          {stateFieldsErrors.formData.password && (
            <span className="err">{stateFieldsErrors.formData.password}</span>
          )}
          <br />
          <label htmlFor="passwrodconfirmation">
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
            value={formData.passwordConfirmation}
          />
          {stateFieldsErrors.formData.passwordConfirmation && (
            <span className="err">
              {stateFieldsErrors.formData.passwordConfirmation}
            </span>
          )}

          <div className="gender">
            <input
              onChange={this.handleChange}
              type="radio"
              value="male"
              name="gender"
              checked={
                this.state.stateFields.formData.gender === "male" ? true : false
              }
            />{" "}
            Male
            <input
              onChange={this.handleChange}
              type="radio"
              value="female"
              name="gender"
              checked={
                this.state.stateFields.formData.gender === "female"
                  ? true
                  : false
              }
            />{" "}
            Female
            <input
              onChange={this.handleChange}
              type="radio"
              value="other"
              name="gender"
              checked={
                this.state.stateFields.formData.gender === "other"
                  ? true
                  : false
              }
            />{" "}
            Other
          </div>
          <div>
            {stateFieldsErrors.formData.gender && (
              <span className="err">{stateFieldsErrors.formData.gender}</span>
            )}
            <br />
            <label
              style={{ marginBottom: "20px", fontWeight: "bold" }}
              htmlFor="interests"
            >
              Enter your programming experience:{" "}
            </label>
            <div>
              <textarea
                className="user-input"
                style={{ marginBottom: "20px" }}
                name="interests"
                id="interests"
                value={formData.interests}
                onChange={this.handleChange}
              />
            </div>
          </div>
          {stateFieldsErrors.formData.interests && (
            <span className="err">{stateFieldsErrors.formData.interests}</span>
          )}
          <br />
          <input
            onClick={this.handleSubmit}
            className="s"
            style={{ marginBottom: "100px" }}
            type="submit"
          />
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
