import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
// import LanguageToggleButton from '../LanguageToggleButton/LanguageToggleButton';
import './Proposal.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function Proposal(props) {
 // const [lorem, ipsum] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'FETCH_PROJECT'});
  }, []);

  const history = useHistory();

  const proposal = useSelector((store) => store.getProject[0]);

  const newProject = () => {
    history.push(``);
  };

  return (
    <div className="container">
      <section id="frontPage">
        <img src="/images/PaintLogo.png" id="placeholderLogo"></img>
        {/* {JSON.stringify(proposal)} */}
        <h2>Proposal for {proposal.client_firstlast_name}</h2>
        <hr></hr>
        <br></br>
      </section>
      <section id="jobIntro">

      <h3>Job # 00{proposal.project_job_number}</h3>
        <ul>
        <li>{proposal.project_propertytype_name}</li>
        <li>{proposal.project_buildingtype_name}</li>
      </ul>
      <h4>Start Date: {proposal.project_startdate}</h4>
      <h4>Start Date: {proposal.project_complete_specificdate}</h4>
      <hr></hr>
      <br></br>
      </section>
      <section id="clientDetails">
        <h2>Client: {proposal.client_firstlast_name}</h2>
        <br></br>
        <p>{proposal.decision_emailaddress}</p>

      </section>
      <section id="proposalPhotos">

      </section>
      <section id="scopeOfWork"></section>
    </div>
  );
}

export default Proposal;
