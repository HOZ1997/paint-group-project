import React, { useState, useEffect } from 'react';
import AddClient from '../AddClient/AddClient';
import WorkOrder from '../ProjectDetails/ProjectDetails';
import ProjectScope from '../ProjectScope/ProjectScope';
import ImagePage from '../ImagePage/ImagePage';
import EstimateCost from '../EstimateCost/EstimateCost';
import SpecialFeature from '../SpecialFeature/SpecialFeature';
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import "./ProjectInformationPage.css"
import {useDispatch, useSelector} from 'react-redux';

function ProjectInformationPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "PUSH_NEW_PROJECT" });
  }, []);

  const idStore = useSelector(
    (store) => store.newProject
  );
  const imageReducer = useSelector(
    (store) => store.imageReducer
  );
  
  const onUpdateInformation = () => {
    
    //dispatch to send image urls to database
    console.log('This is the array of URLs to be sent', imageReducer);
    const imageObject = {
      photos: imageReducer,
      projectId: idStore
    }
    dispatch({ type: 'SAVE_URLS', payload: imageObject })
  }

  console.log("maybe the id:::::::::::", idStore);

  return (
    <div className="container">
      <p>Job # {idStore}:</p>
      <AddClient />
      <ProjectDetails />
      <SpecialFeature />
      <projectScope />
      <ImagePage />
      <EstimateCost />
      <button button type="button" className="btn" onClick={onUpdateInformation}>Create Proposal</button>
    </div>
  );
}

export default ProjectInformationPage;
