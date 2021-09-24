import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div class="topnav">
      <Link to="/">
        <a href="#search">Home</a>
      </Link>
      <div class="topnav-right">
        <Link to="">
          {" "}
          <a href="#search">Sign in</a>
        </Link>
        <Link to="/signup">
          {" "}
          <a href="#about">Sign up</a>
        </Link>
      </div>
    </div>
  );
}
const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
  marginBottom: "40px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};
