import React, {
  useState,
  useEffect,
} from "react";
import { useHistory } from "react-router-dom";
import {
  useDispatch,
  useSelector,
} from "react-redux";
// import LanguageToggleButton from '../LanguageToggleButton/LanguageToggleButton';
import "./Proposal.css";
// import useparams
import { useParams } from "react-router-dom";

// CUSTOM COMPONENTS
import RegisterForm from "../RegisterForm/RegisterForm";
import ProposalHeader from "../ProposalHeader/ProposalHeader";

function Proposal(props) {

  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch({type: 'FETCH_PROJECT', payload: id});
  }, []);

  const history = useHistory();

  const proposal = useSelector(
    (store) => store.getProject[0]
  );

  const imageMappable = useSelector(
    (store) => store.getProject
  );

  const acceptProposal = () => {
    alert('Proposal Accepted!');
    history.push(`/workorder/${id}`)
  }

  return (
    <div>
      {proposal && ( // only continue if proposal is defined
        <>
          {proposal.length === 0 ? (
            <p>...loading...</p>
          ) : (
            <div className="container">

              <section id="jobIntro">
                  <div className="jobIntro">
                    <img src="/images/Superstruct_logo_dark.png" className="logo" />
                  <h3>
                    Job # 00
                    {id}
                  </h3>
                  <ul>
                    <li>
                      {
                        proposal.project_propertytype_name
                      }
                    </li>
                    <li>
                      {
                        proposal.project_buildingtype_name
                      }
                    </li>
                  </ul>
                  <h3>START DATE: </h3>
                  <p>
                    {proposal.project_startdate.slice(0,10)}
                  </p>
                  <h3>COMPLETION DATE: </h3>
                  <p>
                    {
                      proposal.project_complete_specificdate.slice(0,10)
                    }
                  </p>

                  <br></br>
                </div>
              </section>
              <section id="clientDetails">
                <div className="clientDetails">
                  <h3>PREPARED FOR: </h3>
                  <p>
                    {
                      proposal.client_firstlast_name
                    }
                  </p>

                  <p>
                    {
                      proposal.decision_emailaddress
                    }
                  </p>
                  <p>
                    {
                      proposal.decision_phonenumber
                    }
                  </p>
                  <p>
                    {proposal.project_address_1}{" "}
                    {proposal.project_address_2}
                  </p>
                  <p>
                    {
                      proposal.project_address_city
                    }
                    ,{" "}
                    {
                      proposal.project_address_state
                    }{" "}
                    {proposal.project_address_zip}
                  </p>
                  <br></br>
                </div>
              </section>
              <section id="proposalPhotos">
                <div className="proposalPhotos">
                  {imageMappable.map( (item, index) =>(<img src={item.photo_upload_path} key={index} />))}
                  <img src="/images/FellaPainting.png"></img>
                  <img src="/images/CartoonPainting.png"></img>
                  <br></br>
                  <img src="/images/MoreFriends.png"></img>
                  <img src="/images/paintRoller.png"></img>
                  <br></br>
                </div>
              </section>
              <section id="scopeOfWork">
                <div className="scopeOfWork">
                  <h2>Scope of Work</h2>
                  <ul>
                    <li>
                      <h3>Power Wash? </h3>
                      {/* if this is true, render "Yes", else render "No" */}
                      <p>
                        {proposal.isexteriorprep_powerwash ===
                        true
                          ? "Yes"
                          : "No"}
                      </p>
                    </li>
                    <li>
                      <h3>Scrape? </h3>
                      <p>
                        {proposal.isexteriorprep_scrape ===
                        true
                          ? "Yes"
                          : "No"}
                      </p>
                    </li>
                    <li>
                      <h3>Remove mildew? </h3>
                      <p>
                        {proposal.isexteriorprep_mildew ===
                        true
                          ? "Yes"
                          : "No"}
                      </p>
                    </li>
                    <li>
                      <h3>Power Wash? </h3>
                      <p>
                        {proposal.isexteriorprep_powerwash ===
                        true
                          ? "Yes"
                          : "No"}
                      </p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <h3>Warranty: </h3>
                      <p>
                        {proposal.isexteriorwarranty_oneyear ===
                        true
                          ? "One Year"
                          : ""}
                      </p>
                      <p>
                        {proposal.isexteriorwarranty_threeyear ===
                        true
                          ? "Three Year"
                          : ""}
                      </p>
                      <p>
                        {proposal.isexteriorwarranty_fiveyear ===
                        true
                          ? "Five Year"
                          : ""}
                      </p>
                    </li>
                  </ul>

                  <br></br>
                </div>
              </section>
              <section id="specialFeatures">
                <div className="specialFeatures">
                  <h2>Special Feature(s)</h2>
                  <h3>Feature Type: </h3>
                  <p>
                    {
                      proposal.specialfeatureexterior_type_name
                    }
                  </p>

                  <h3>Notes? </h3>
                  <p>
                    {
                      proposal.specialfeature_notes
                    }
                  </p>
                  <h3>Paint Product: </h3>
                  <p>
                    {
                      proposal.specialfeature_paintproduct
                    }
                  </p>
                  <ul>
                    <li>
                      <h3>Primer? </h3>
                      <p>
                        {proposal.isspecialfeaturestatus_needprimer ===
                        true
                          ? "Yes"
                          : "No"}
                      </p>
                    </li>
                    <li>
                      <h3>Patch or Repair? </h3>
                      <p>
                        {proposal.isspecialfeaturestatus_patchedrepair ===
                        true
                          ? "Yes"
                          : "No"}
                      </p>
                    </li>
                    <li>
                      <h3>
                        Extensive Scraping?{" "}
                      </h3>
                      <p>
                        {proposal.isspecialfeaturestatus_extensivescraping ===
                        true
                          ? "Yes"
                          : "No"}
                      </p>
                    </li>
                  </ul>
                </div>
              </section>
              <section id="estimate">
                <div className="estimate">
                  <h3>
                    Project Total: $
                    {
                      proposal.exteriorestimate_laborcost + proposal.exteriorestimate_materialcost
                    }
                  </h3>
                  <ul>
                    <li>
                      <h4>Labor:</h4>
                      <p>
                        $
                        {
                          proposal.exteriorestimate_laborcost
                        }
                      </p>
                    </li>
                    <li>
                      <h4>Material:</h4>
                      <p>
                        $
                        {
                          proposal.exteriorestimate_materialcost
                        }
                      </p>
                    </li>
                  </ul>

                  <br></br>
                </div>
              </section>
              <section id="proposalConclusion">
                <div className="proposalConclusion">
                  <h3>Accept and Continue?</h3>
                  <button className="myButton" onClick={acceptProposal}>
                    ACCEPT PROPOSAL
                  </button>
                </div>
              </section>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Proposal;
