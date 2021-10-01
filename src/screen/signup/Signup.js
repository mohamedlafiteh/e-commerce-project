import React from "react";
import { connect } from "react-redux";
import Header from "../../components/header/Header";

import { validateAllFormFields } from "./Validator";
import { createUser } from "../../store/actions/userAction";
import { stateFields, stateFieldsErrors } from "../constant/stateFields";
import { resetForm } from "./resetForm";
import "./Signup.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stateFields,
      stateFieldsErrors,
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

    if (
      validateAllFormFields(formData) &&
      Object.keys(validateAllFormFields(formData)).length > 0
    ) {
      this.setState({
        stateFieldsErrors: {
          formErrorData: validateAllFormFields(formData),
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
    const { formErrorData } = this.state.stateFieldsErrors;
    return (
      <>
        <Header />
        <h3 style={{ textAlign: "center" }}>Sign up </h3>
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
            value={formData.firstName}
          />
          {formErrorData && formErrorData.firstName ? (
            <span className="err">{formErrorData.firstName}</span>
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
            value={formData.lastName}
          />
          {formErrorData && formErrorData.lastName ? (
            <span className="err">{formErrorData.lastName}</span>
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
            value={formData.email}
          />
          {formErrorData && formErrorData.email ? (
            <span className="err">{formErrorData.email}</span>
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
            value={formData.password}
          />
          {formErrorData && formErrorData.password ? (
            <span className="err">{formErrorData.password}</span>
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
            value={formData.passwordConfirmation}
          />
          {formErrorData && formErrorData.passwordConfirmation ? (
            <span className="err">{formErrorData.passwordConfirmation}</span>
          ) : (
            ""
          )}

          <div className="gender" onChange={this.handleChange}>
            <input type="radio" value="male" name="gender" /> Male
            <input type="radio" value="female" name="gender" /> Female
            <input type="radio" value="other" name="gender" /> Other
          </div>
          <div>
            {formErrorData && formErrorData.gender ? (
              <span className="err">{formErrorData.gender}</span>
            ) : (
              ""
            )}
            <br />
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
                value={formData.interests}
                onChange={this.handleChange}
              />
            </div>
          </div>
          {formErrorData && formErrorData.interests ? (
            <span className="err">{formErrorData.interests}</span>
          ) : (
            ""
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
