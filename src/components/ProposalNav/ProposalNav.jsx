import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./ProposalNav.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function ProposalNav() {
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
  return (
    <div className="proposalNav">
      {/* if pathname is not /login, render this  */}
      {location.pathname !== "/login" && (
        <LogOutButton className="navLink" />
      )}
    </div>
  );
}

export default ProposalNav;
