import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <a href="Dashboard.html" className="navbar-brand">
            Project Management Tool
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              <a href="/dashboard" className="nav-item nav-link active">
                DashBoard
              </a>
            </div>
            <div className="navbar-nav ml-auto">
              <a href="register.html" className="nav-item nav-link">
                Sign Up
              </a>
              <a href="login.html" className="nav-item nav-link">
                Login
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
