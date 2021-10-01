import React from "react";
import Header from "../../components/header/Header";
import SigninForm from "../forms/SigninForm";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Signin(props) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState({ emailError: "", passwordError: "" });

  const signin = (details) => {
    console.log(
      "the new user in the redux state " + JSON.stringify(props.user)
    );
    if (props.user.email !== details.email) {
      setError({ emailError: "Please enter correct email" });
    } else if (props.user.password !== details.password) {
      setError({ passwordError: "Please enter correct password" });
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
