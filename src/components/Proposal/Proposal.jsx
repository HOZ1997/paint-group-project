import React, {
  useState,
  useEffect,
} from "react";
import { useHistory } from "react-router-dom";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import "./Proposal.css";
import { useParams } from "react-router-dom";

// CUSTOM COMPONENTS
import RegisterForm from "../RegisterForm/RegisterForm";
import ProposalHeader from "../ProposalHeader/ProposalHeader";

function Proposal(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch({
      type: "FETCH_PROJECT",
      payload: id,
    });
  }, []);

  const history = useHistory();

  const proposal = useSelector(
    (store) => store.getProject[0]
  );

  const imageMappable = useSelector(
    (store) => store.getProject
  );

  const acceptProposal = () => {
    alert("Proposal Accepted!");
    history.push(`/workorder/${id}`);
  };

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
                  <img
                    src="/images/Superstruct_logo_dark.png"
                    className="logo"
                  />
                  <div cardContent>
                    <div className="uppercase">
                      <h3>
                        JOB # 00
                        {id}
                      </h3>
                      <p>
                        {
                          proposal.project_propertytype_name
                        }
                      </p>
                      <p>
                        {
                          proposal.project_buildingtype_name
                        }
                      </p>
                    </div>

                    <h3>START DATE: </h3>
                    <p>
                      {proposal.project_startdate.slice(
                        0,
                        10
                      )}
                    </p>
                    <h3>COMPLETION DATE: </h3>
                    <p>
                      {proposal.project_complete_specificdate.slice(
                        0,
                        10
                      )}
                    </p>
                  </div>

                  <br></br>
                </div>
              </section>
              <section id="clientDetails">
                <div className="clientDetails">
                  <h3>PREPARED FOR: </h3>
                  <div className="uppercase">
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
                      {
                        proposal.project_address_zip
                      }
                    </p>
                  </div>
                  <br></br>
                </div>
              </section>
              <section id="proposalPhotos">
                <div className="proposalPhotos">
                  {imageMappable.map(
                    (item, index) => (
                      <img
                        src={
                          item.photo_upload_path
                        }
                        key={index}
                      />
                    )
                  )}
                  
                </div>
              </section>
              <section id="scopeOfWork">
                <div className="scopeOfWork">
                  <h2>SCOPE OF WORK</h2>

                  <p>POWER WASH: </p>
                  {/* if this is true, render "Yes", else render "No" */}
                  <p>
                    {proposal.isexteriorprep_powerwash ===
                    true
                      ? "YES"
                      : "NO"}
                  </p>
                  <br />

                  <p>SCRAPE: </p>
                  <p>
                    {proposal.isexteriorprep_scrape ===
                    true
                      ? "YES"
                      : "NO"}
                  </p>
                  <br />

                  <p>REMOVE MILDEW: </p>
                  <p>
                    {proposal.isexteriorprep_mildew ===
                    true
                      ? "YES"
                      : "NO"}
                  </p>
                  <br />

                  <p>POWER WASH: </p>
                  <p>
                    {proposal.isexteriorprep_powerwash ===
                    true
                      ? "YES"
                      : "NO"}
                  </p>
                  <br />

                  <p>WARRANTY: </p>
                  <p>
                    {proposal.isexteriorwarranty_oneyear ===
                    true
                      ? "ONE YEAR"
                      : ""}
                  </p>
                  <p>
                    {proposal.isexteriorwarranty_threeyear ===
                    true
                      ? "THREE YEAR"
                      : ""}
                  </p>
                  <p>
                    {proposal.isexteriorwarranty_fiveyear ===
                    true
                      ? "FIVE YEAR"
                      : ""}
                  </p>

                  <br></br>
                </div>
              </section>
              <section id="specialFeatures">
                <div className="specialFeatures">
                  <h2>SPECIAL FEATURE(S)</h2>
                  <div className="uppercase">
                    <p>FEATURE TYPE: </p>

                    <p>
                      {
                        proposal.specialfeatureexterior_type_name
                      }
                    </p>
                    <br />

                    <p>NOTES: </p>
                    <p>
                      {
                        proposal.specialfeature_notes
                      }
                    </p>
                    <br />
                    <p>PAINT PRODUCT: </p>
                    <p>
                      {
                        proposal.specialfeature_paintproduct
                      }
                    </p>
                    <br />
                  </div>

                  <p>PRIMER: </p>
                  <p>
                    {proposal.isspecialfeaturestatus_needprimer ===
                    true
                      ? "YES"
                      : "NO"}
                  </p>
                  <br />

                  <p>PATCH OR REPAIR: </p>
                  <p>
                    {proposal.isspecialfeaturestatus_patchedrepair ===
                    true
                      ? "YES"
                      : "NO"}
                  </p>
                  <br />

                  <p>EXTENSIVE SCRAPING: </p>
                  <p>
                    {proposal.isspecialfeaturestatus_extensivescraping ===
                    true
                      ? "YES"
                      : "NO"}
                  </p>
                </div>
              </section>
              <section id="estimate">
                <div className="estimate">
                  <h2>
                    PROJECT TOTAL: $
                    {proposal.exteriorestimate_laborcost +
                      proposal.exteriorestimate_materialcost}
                  </h2>

                  <p>LABOR:</p>
                  <p>
                    $
                    {
                      proposal.exteriorestimate_laborcost
                    }
                  </p>
                  <br />
                  <p>MATERIAL:</p>
                  <p>
                    $
                    {
                      proposal.exteriorestimate_materialcost
                    }
                  </p>

                  <br></br>
                </div>
              </section>
              <section id="proposalConclusion">
                <div className="proposalConclusion">
                  <h2>ACCEPT AND CONTINUE?</h2>
                  <button
                    className="myButton"
                    onClick={acceptProposal}
                  >
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
