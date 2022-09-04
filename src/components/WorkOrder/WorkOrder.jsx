import React, { useState, useEffect } from 'react';
import { useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
// import LanguageToggleButton from '../LanguageToggleButton/LanguageToggleButton';
import './WorkOrder.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function WorkOrder(props) {
 // const [lorem, ipsum] = useState('');
  const dispatch = useDispatch();


  const {id} = useParams();
  const history = useHistory();
  const proposal = useSelector((store) => store.getProject[0]);

  useEffect(() => {
    console.log('id in work order: ', id);
    dispatch({type: 'FETCH_PROJECT', payload: id});
  }, []);

  const newProject = () => {
    history.push(``);
  };

  return (
    <div>
      {proposal && ( // only continue if proposal is defined
        <>
      {(proposal.length === 0 ) ? <p>...loading...</p> : (
            <div className="container">
              <div className="workOrderCardBox">
        <section id="frontPage">
          <img src="/images/Superstruct_logo_dark.png" id="superStructLogo"></img>
          <h3>Client: {proposal.client_firstlast_name}</h3>
          <hr></hr>
          <br></br>
        </section>
        <section id="jobIntro">

        <h3>Job # 00{id}</h3>
        <ul>
          <li>{proposal.project_propertytype_name}</li>
          <li>{proposal.project_buildingtype_name}</li>
        </ul>
        <p>Start Date: {proposal.project_startdate.slice(0,10)}</p>
        <p>Start Date: {proposal.project_complete_specificdate.slice(0,10)}</p>
        <hr></hr>
        <br></br>
        </section>
        <section id="clientDetails">
          <h3>Client: {proposal.client_firstlast_name}</h3>
          <p>{proposal.decision_emailaddress}</p>
          <p>{proposal.decision_phonenumber}</p>
          <p>{proposal.project_address_1} {proposal.project_address_2}</p>
          <p>{proposal.project_address_city}, {proposal.project_address_state} {proposal.project_address_zip}</p>
          <br></br>
        </section>

        <section id="scopeOfWork">
          <h3>Scope of Work</h3>
          <h4>Prep</h4>
                <ul>
                  {proposal.isexteriorprep_powerwash === true ?
            <li>Power wash? Yes</li>
                    : <li>Power wash? No</li>}
                  {proposal.isexteriorprep_scrape === true ?
            <li>Scrape? Yes</li>
                    : <li>Scrape? No</li>}
                  {proposal.isexteriorprep_mildew === true ?
                    <li>Remove mildew? Yes</li>
                    : <li>Remove mildew? No</li>}
          </ul>
          <br></br>
        </section>
        <section id="specialFeatures">
          <h3>Special Feature(s)</h3>
          <p>Feature Type: {proposal.specialfeatureexterior_type_name}</p>
          <p>Notes? {proposal.specialfeature_notes}</p>
          <p>Paint Product: {proposal.specialfeature_paintproduct}</p>
          <ul>
            {proposal.isspecialfeaturestatus_needprimer === 'True' ?
            <li>Primer? Yes</li>
                    : <li>Primer? No</li>}
            {proposal.isspecialfeaturestatus_patchedrepair === 'True' ?
            <li>Patch or repair? Yes</li>
                    : <li>Patch or repair? No</li>}
            {proposal.isspecialfeaturestatus_extensivescraping === 'True' ?
                    <li>Extensive scraping? Yes</li>
                    : <li>Extensive scraping? No</li>}
          </ul>
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
