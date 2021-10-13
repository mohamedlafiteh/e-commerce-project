import React from "react";
import Header from "../../components/header/Header";
import SigninForm from "../forms/SigninForm";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { errorMessages } from "../../widget/signup/errorMessages";

function Signin(props) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState({ emailError: "", passwordError: "" });

  const signin = (details) => {
    if (props.user.email !== details.email) {
      setError({ emailError: errorMessages.email });
    } else if (props.user.password !== details.password) {
      setError({ passwordError: errorMessages.password });
    } else {
      setUser({
        email: details.email,
        password: details.password,
      });
    }
  };

  const logout = () => {
    setUser({
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <Header />
      {user.email != "" ? (
        <div>
          <h2 className="welcome">welcome, you are signed in </h2>
          <div className="center">
            <button onClick={logout}>Sign out</button>{" "}
            <Link to="/">
              <button style={{ marginLeft: "10px" }}>Home page</button>{" "}
            </Link>
          </div>
        </div>
      ) : (
        <SigninForm signin={signin} error={error} />
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};
export default connect(mapStateToProps)(Signin);
