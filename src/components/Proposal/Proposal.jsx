import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
// import LanguageToggleButton from '../LanguageToggleButton/LanguageToggleButton';
import './Proposal.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import ProposalNav from '../ProposalNav/ProposalNav';

function Proposal(props) {
 // const [lorem, ipsum] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'FETCH_PROJECT'});
  }, []);

  const history = useHistory();

  const proposal = useSelector((store) => store.getProject[0]);

  // const store = useSelector((store => store));

  const newProject = () => {
    history.push(``);
  };

  return (
    //  <div>{(JSON.stringify(proposal))}</div>
    <div>
      {proposal && ( // only continue if proposal is defined
        <>
          {proposal.length === 0 ? (
            <p>...loading...</p>
          ) : (
            <div className="container">
              <section id="frontPage">
                <ProposalNav />
              </section>
              <section id="jobIntro">
                <h3>
                  Job # 00
                  {proposal.project_job_number}
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
                <p>
                  Start Date:{" "}
                  {proposal.project_startdate}
                </p>
                <p>
                  Start Date:{" "}
                  {
                    proposal.project_complete_specificdate
                  }
                </p>
                <hr></hr>
                <br></br>
              </section>
              <section id="clientDetails">
                <h3>
                  Prepared for:{" "}
                  {proposal.client_firstlast_name}
                </h3>
                <p>
                  {proposal.decision_emailaddress}
                </p>
                <p>
                  {proposal.decision_phonenumber}
                </p>
                <p>
                  {proposal.project_address_1}{" "}
                  {proposal.project_address_2}
                </p>
                <p>
                  {proposal.project_address_city},{" "}
                  {proposal.project_address_state}{" "}
                  {proposal.project_address_zip}
                </p>
                <br></br>
              </section>
              <section id="proposalPhotos">
                <h3>Pictures</h3>

                <img src="/images/FellaPainting.png"></img>
                <img src="/images/CartoonPainting.png"></img>
                <br></br>
                <img src="/images/MoreFriends.png"></img>
                <img src="/images/paintRoller.png"></img>
                <br></br>
              </section>
              <section id="scopeOfWork">
                <h3>Scope of Work</h3>
                <h4>Prep</h4>
                <ul>
                  <li>
                    Power Wash?{" "}
                    {proposal.isexteriorprep_powerwash.toString()}
                  </li>
                  <li>
                    Scrape?{" "}
                    {proposal.isexteriorprep_scrape.toString()}
                  </li>
                  <li>
                    Remove mildew?{" "}
                    {proposal.isexteriorprep_mildew.toString()}
                  </li>
                  <li>
                    Power Wash?{" "}
                    {proposal.isexteriorprep_powerwash.toString()}
                  </li>
                </ul>
                <h4>Warranty</h4>
                <ul>
                  <li>
                    One Year?
                    {proposal.isexteriorwarranty_oneyear.toString()}
                  </li>
                  <li>
                    Three Year?{" "}
                    {proposal.isexteriorwarranty_threeyear.toString()}
                  </li>
                  <li>
                    Five Year?{" "}
                    {proposal.isexteriorwarranty_fiveyear.toString()}
                  </li>
                </ul>
                <hr></hr>
                <br></br>
              </section>
              <section id="specialFeatures">
                <h3>Special Feature(s)</h3>
                <p>
                  Feature Type:{" "}
                  {
                    proposal.specialfeatureexterior_type_name
                  }
                </p>
                <p>
                  Notes?{" "}
                  {proposal.specialfeature_notes}
                </p>
                <p>
                  Paint Product:{" "}
                  {
                    proposal.specialfeature_paintproduct
                  }
                </p>
                <ul>
                  <li>
                    Primer?{" "}
                    {proposal.isspecialfeaturestatus_needprimer.toString()}
                  </li>
                  <li>
                    Patch or Repair?{" "}
                    {proposal.isspecialfeaturestatus_patchedrepair.toString()}
                  </li>
                  <li>
                    Extensive Scraping?{" "}
                    {proposal.isspecialfeaturestatus_extensivescraping.toString()}
                  </li>
                </ul>
              </section>
              <section id="estimate">
                <h3>
                  Project Total: $
                  {
                    proposal.exteriorestimate_totalcost
                  }
                  00
                </h3>
                <ul>
                  <li>
                    Labor: $
                    {
                      proposal.exteriorestimate_laborcost
                    }
                    00
                  </li>
                  <li>
                    Material: $
                    {
                      proposal.exteriorestimate_materialcost
                    }
                    00
                  </li>
                </ul>
                <hr></hr>
                <br></br>
              </section>
              <section id="proposalConclusion">
                <h3>Accept and Continue?</h3>
                <button>Accept Proposal</button>
              </section>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Proposal;


//Photo Map --->{proposal.photo_urls.map( item =>(<img src={item.id.toString} />))} I don't think this is set up yet