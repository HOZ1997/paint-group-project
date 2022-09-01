import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./ProposalHeader.css";
import { useSelector } from "react-redux";
import {useLocation} from "react-router-dom";

function ProposalHeader() {
  const location = useLocation();
  return (
    <div className="proposalHeader">
      <header>
        {/* if /proposal, say Proposal */}
        {location.pathname === "/proposal" && (
          <h1 className="nav-title">Proposal</h1>
        )}
        {/* else if /projects, say Projects */}
        {location.pathname === "/projects" && (
          <h1 className="nav-title">Projects</h1>
        )}
        {/* else if /ProjectInformationPage, say Project Information */}
        {location.pathname ===
          "/ProjectInformationPage" && (
          <h1 className="nav-title" >
            Project Information
          </h1>
        )}
        {location.pathname ===
          "/WorkOrder" && (
          <h1 className="nav-title">
            Work Order
          </h1>
        )}
      </header>
    </div>
  );
}

export default ProposalHeader;
