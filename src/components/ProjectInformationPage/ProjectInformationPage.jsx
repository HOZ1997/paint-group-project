//import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import React, { useState } from 'react';
import AddClient from '../AddClient/AddClient';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import ProjectScope from '../ProjectScope/ProjectScope';
import ImagePage from '../ImagePage/ImagePage';
import EstimateCost from '../EstimateCost/EstimateCost';
import SpecialFeature from '../SpecialFeature/SpecialFeature';



function ProjectInformationPage() {
const dispatch=useDispatch();
const client = useSelector((store) => store.client);
const projectScope = useSelector((store) => store.projectScope);
const projectDetails = useSelector((store) => store.projectDetails);
const specialFeature = useSelector((store) => store.specialFeature);
//const EstimatedCost = useSelector((store) => store.);


const onUpdateInformation = () => {
  let fullForm = {
    client: client,
    projectScope: projectScope,
    projectDetails: projectDetails,
    specialFeature: specialFeature,
    // image: imageReducer,
    //estimatedcost:noreducersetupyet  
  }
  //dispatch with full form as payload
        
  console.log('in full Form', fullForm);
  dispatch({ action: 'UPDATE_FULLFORM', type: fullForm });
}





  return (
    <div className="container">
      <p>Job #:</p>
      <AddClient />
      <ProjectDetails />
      <SpecialFeature />
      <ProjectScope />
      <ImagePage />
      <EstimateCost />

      <button button type="button" className="btn" onClick={onUpdateInformation}>Create Proposal</button>
    </div>
  );
}



export default ProjectInformationPage;
