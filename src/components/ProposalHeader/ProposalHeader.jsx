import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./ProposalHeader.css";
import { useSelector } from "react-redux";

function ProposalHeader() {
  return (
    <div className="proposalHeader">
      <header>
        <h1 className="nav-title">Proposal</h1>
      </header>
    </div>
  );
}

export default ProposalHeader;
