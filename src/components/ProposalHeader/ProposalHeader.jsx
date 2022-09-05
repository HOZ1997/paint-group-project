import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./ProposalHeader.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function ProposalHeader() {
  const location = useLocation();
  return (
    <div className="proposalHeader">
      <header>
        {/* if /projects, say Projects */}
        {location.pathname === "/user" && (
          <h1 className="nav-title">PROJECTS</h1>
        )}
        {/* else if /ProjectInformationPage, say Project Information */}
        {location.pathname ===
          "/ProjectInformationpage" && (
          <h1 className="nav-title">
            INFORMATION
          </h1>
          )}
        {/* HARDCODED!!!!!!! */}
        {location.pathname.match(/proposal/gi) && (
          <h1 className="nav-title">
            PROPOSAL
          </h1>
        )}
        {/* HARDCODED!!!!!!! */}
        {location.pathname.match(/workorder/gi) && (
          <h1 className="nav-title">
            WORK ORDER
          </h1>
        )}
        {/* in any other case */}
        {/* {location.pathname !== "/projects" &&
          location.pathname !==
            "/ProjectInformationPage" &&
          location.pathname !== "/WorkOrder" && (
            <h1 className="nav-title">
              Proposal
            </h1>
          )} */}
      </header>
    </div>
  );
}

export default ProposalHeader;
