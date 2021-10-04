import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="topnav">
      <Link to="/">
        <span className="a-tag">Home</span>
      </Link>
      <div className="topnav-right">
        <Link to="/signin">
          {" "}
          <span className="a-tag">Sign in</span>
        </Link>
        <Link to="/signup">
          {" "}
          <span className="a-tag">Sign up</span>
        </Link>
      </div>
    </div>
  );
}
