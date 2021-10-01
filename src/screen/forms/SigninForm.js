import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SigninForm.css";
export default function SigninForm({ signin, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });
  const HandleSubmit = (e) => {
    e.preventDefault();
    signin(details);
  };

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <div className="box">
          <h1 className="title">Sign in</h1>
          <label className="label-text" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
          <h4 className="error-text"> {error.emailError}</h4>
          <label className="label-text" htmlFor="password">
            Password
          </label>
          <input
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            type="password"
            name="password"
            className="email"
          />
          <h4 className="error-text"> {error.passwordError}</h4>
          <input className="btn1" type="submit" value="Sign in" />
          <Link to="/signup">
            <button id="btn2">Sign up </button>
          </Link>
          <p className="pass-text">
            Forgot your password? <u style={{ color: "black" }}>Click Here!</u>
          </p>
        </div>
      </form>
    </>
  );
}
