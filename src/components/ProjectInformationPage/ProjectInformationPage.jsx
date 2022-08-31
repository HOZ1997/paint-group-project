import React, { useState, useEffect } from 'react';
import AddClient from '../AddClient/AddClient';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import ProjectScope from '../ProjectScope/ProjectScope';
import ImagePage from '../ImagePage/ImagePage';
import EstimateCost from '../EstimateCost/EstimateCost';
import SpecialFeature from '../SpecialFeature/SpecialFeature';
import {useDispatch, useSelector} from 'react-redux';

function ProjectInformationPage() {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'PUSH_NEW_PROJECT'});
  }, []);

  const idStore = useSelector((store) => store.newProject);
  console.log('maybe the id:::::::::::',idStore)

  return (
    <div className="container">
      <p>Job # {idStore}:</p>
      <AddClient />
      <ProjectDetails />
      <SpecialFeature />
      <ProjectScope />
      <ImagePage />
      <EstimateCost />

    </div>
  );
}

export default ProjectInformationPage;
