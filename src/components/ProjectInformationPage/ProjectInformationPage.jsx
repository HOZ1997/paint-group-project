//import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import React, { useState } from 'react';
import AddClient from '../AddClient/AddClient';
import WorkOrder from '../ProjectDetails/ProjectDetails';
import ProjectScope from '../ProjectScope/ProjectScope';
import ImagePage from '../ImagePage/ImagePage';
import EstimateCost from '../EstimateCost/EstimateCost';
import SpecialFeature from '../SpecialFeature/SpecialFeature';



function ProjectInformationPage() {
const dispatch=useDispatch();
const client = useSelector((store) => store.client);
//const projectScope = useSelector((store) => store.projectScope);
// const projectDetails = useSelector((store) => store.projectDetails);
// const specialFeatureReducer = useSelector((store) => store.specialFeatureReducer);
// const specialFeatureReducer = useSelector((store) => store.specialFeatureReducer);


const onUpdateInformation = () => {
  const fullForm = {
    client: client,
    //projectScope: projectScope
    // projectDetails: projectDetails,
    // specialFeatureReducer: specialFeatureReducer,
    // image: imageReducer,
    // estimatedcost:noreducersetupyet  
  }
  //dispatch with full form as payload
        
  console.log('in full Form', fullForm);
  dispatch({ action: 'ADD_FULLFORM', type: fullForm });
}
// database side-----
//   req.body.fullForm.projectScope.whateverFormPart1 properties from reducers 
// req.body.fullForm.firstReducer.whateverFormPart2
// req.body.fullForm.secondReducer.whateverFormPart1
// req.body.fullForm.secondReducer.whateverFormPart2
// req.body.fullForm.thirdReducer.whateverFormPart1
// req.body.fullForm.thirdReducer.whateverFormPart2





  return (
    <div className="container">
      <p>Job #:</p>
      <AddClient />
      <WorkOrder />
      <SpecialFeature />
      <ProjectScope />
      <ImagePage />
      <EstimateCost />

      <button button type="button" className="btn" onClick={onUpdateInformation}>Create Proposal</button>
    </div>
  );
}



export default ProjectInformationPage;
