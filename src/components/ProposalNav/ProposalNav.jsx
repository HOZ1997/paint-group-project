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
      {/* if pathname is /projects, render this  */}

      <ul className="proposalNavProjectList">
        <li>
          <Link to="/projects">
            {location.pathname ===
              "/projects" && (
              <img
                src="/images/list_light.jpg"
                className="navProjectList"
              />
            )}
            {/* else render  */}
            {location.pathname !==
              "/projects" && (
              <img src="/images/list_dark.jpg" />
            )}
          </Link>
        </li>
      </ul>
      <ul className="proposalNavInfo">
        <li>
          <Link to="/ProjectInformationPage">
            {location.pathname ===
              "/ProjectInformationPage" && (
              <img
                src="/images/info_light.jpg"
                className="proposalNavInfo"
              />
            )}
            {/* else render  */}
            {location.pathname !==
              "/ProjectInformationPage" && (
              <img
                src="/images/info_dark.jpg"
                className="navInfo"
              />
            )}
          </Link>
        </li>
      </ul>
      <ul className="proposalNavProposal">
        <li>
          <Link to="/proposal">
            {location.pathname ===
              "/proposal" && (
              <img
                src="/images/proposal_light.jpg"
                className="navProposal"
              />
            )}
            {/* else render  */}
            {location.pathname !==
              "/proposal" && (
              <img
                src="/images/proposal_dark.jpg"
                className="navProposal"
              />
            )}
          </Link>
        </li>
      </ul>
      <ul className="proposalNavWorkOrder">
        <li>
          <Link to="/WorkOrder">
            {location.pathname ===
              "/WorkOrder" && (
              <img
                src="/images/work_light.jpg"
                className="navWorkOrder"
              />
            )}
            {/* else render  */}
            {location.pathname !==
              "/WorkOrder" && (
              <img
                src="/images/work_dark.jpg"
                className="navWorkOrder"
              />
            )}
          </Link>
        </li>
      </ul>
      <ul className="proposalNavLogout">
        <li>
          <img
            src="/images/account_dark.jpg"
            className="navLogout"
            //   onclick send logout action
            onClick={() => {
              // send logout dispatch
              dispatch({ type: "LOGOUT" });
              // redirect to login page
              history.push("/login");
            }}
          />
        </li>
      </ul>
    </div>
  );
}

export default ProposalNav;
