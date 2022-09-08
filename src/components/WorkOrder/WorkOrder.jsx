import React, {
  useState,
  useEffect,
} from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom";
import {
  useDispatch,
  useSelector,
} from "react-redux";

import "./WorkOrder.css";

// CUSTOM COMPONENTS
import RegisterForm from "../RegisterForm/RegisterForm";

function WorkOrder(props) {
  // const [lorem, ipsum] = useState('');
  const dispatch = useDispatch();

  const { id } = useParams();
  const history = useHistory();
  const proposal = useSelector(
    (store) => store.getProject[0]
  );

  useEffect(() => {
    console.log("id in work order: ", id);
    dispatch({
      type: "FETCH_PROJECT",
      payload: id,
    });
  }, []);

  const newProject = () => {
    history.push(``);
  };

  return (
    <div>
      {proposal && ( // only continue if proposal is defined
        <>
          {proposal.length === 0 ? (
            <p>...LOADING...</p>
          ) : (
            <div className="container">
              <div className="workOrderCardBox">
                <section id="frontPage">
                  <img
                    src="/images/Superstruct_logo_dark.png"
                    id="superStructLogo"
                  ></img>
                    <br></br>
                    <br></br>
                </section>
                <section id="jobIntro">
                  <p>Job # 00{id}</p>
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

                  <p>
                    START DATE:{" "}
                    {proposal.project_startdate.slice(
                      0,
                      10
                    )}
                  </p>
                  <p>
                    END DATE:{" "}
                    {proposal.project_complete_specificdate.slice(
                      0,
                      10
                    )}
                  </p>
                  <hr></hr>
                  <br></br>
                </section>
                <section id="clientDetails">
                  <p>
                    CLIENT:{" "}
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
                    <hr></hr>
                  <br></br>
                </section>

                <section id="scopeOfWork">
                  <p>SCOPE OF WORK</p>
                    {proposal.isexteriorprep_powerwash ===
                    true ? (
                      <p>POWER WASH: YES</p>
                    ) : (
                      <p>POWER WASH: NO</p>
                    )}
                    {proposal.isexteriorprep_scrape ===
                    true ? (
                      <p>SCRAPE: YES</p>
                    ) : (
                      <p>SCRAPE: NO</p>
                    )}
                    {proposal.isexteriorprep_mildew ===
                    true ? (
                      <p>REMOVE MILDEW: YES</p>
                    ) : (
                      <p>REMOVE MILDEW: NO</p>
                    )}
                  <hr></hr>
                  <br></br>
                </section>
                <section id="specialFeatures">
                  <p>SPECIAL FEATURE(S)</p>
                  <p>
                    FEATURE TYPE:{" "}
                    {
                      proposal.specialfeatureexterior_type_name
                    }
                  </p>
                  <p>
                    NOTES:{" "}
                    {
                      proposal.specialfeature_notes
                    }
                  </p>
                  <p>
                    PAINT PRODUCT:{" "}
                    {
                      proposal.specialfeature_paintproduct
                    }
                  </p>
                    {proposal.isspecialfeaturestatus_needprimer ===
                    "True" ? (
                      <p>PRIMER: YES</p>
                    ) : (
                      <p>PRIMER: NO</p>
                    )}
                    {proposal.isspecialfeaturestatus_patchedrepair ===
                    "True" ? (
                      <p>
                        PATCH OR REPAIR: YES
                      </p>
                    ) : (
                      <p>PATCH OR REPAIR: NO</p>
                    )}
                    {proposal.isspecialfeaturestatus_extensivescraping ===
                    "True" ? (
                      <p>
                        EXTENSIVE SCRAPING: YES
                      </p>
                    ) : (
                      <p>
                        EXTENSIVE SCRAPING: NO
                      </p>
                    )}
                </section>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default WorkOrder;
