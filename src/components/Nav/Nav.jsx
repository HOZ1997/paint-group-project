import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">
          Prime Solo Project
        </h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link
              className="navLink"
              to="/addclient"
            >
              Add Client
            </Link>

            <Link
              className="navLink"
              to="/workOrder"
            >
              Work Order
            </Link>

            <Link
              className="navLink"
              to="/projects"
            >
              Projects
            </Link>

            <Link
              className="navLink"
              to="/specialfeature"
            >
              Special Features
            </Link>

            <Link
              className="navLink"
              to="/proposal"
            >
              Proposal
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
