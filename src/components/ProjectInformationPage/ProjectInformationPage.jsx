import React, { useState, useEffect } from 'react';
import AddClient from '../AddClient/AddClient';
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
  console.log("maybe the id:::::::::::", idStore);

  return (
    <div className="container">
      <div className='jobNumberClass'>
        <h2>JOB # {idStore}</h2>
      </div>
      <AddClient />
      <ProjectDetails />
      <SpecialFeature />
      <ProjectScope />
      <ImagePage />
      <EstimateCost />
      {/* <button button type="button" className="btn" onClick={onUpdateInformation}>Create Proposal</button> */}
    </div>
  );
}

export default ProjectInformationPage;
