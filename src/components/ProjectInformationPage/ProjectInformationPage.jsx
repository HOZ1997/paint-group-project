import React from 'react';
import AddClient from '../AddClient/AddClient';
import WorkOrder from '../ProjectDetails/ProjectDetails';
import ProjectScope from '../ProjectScope/ProjectScope';
import ImagePage from '../ImagePage/ImagePage';
import EstimateCost from '../EstimateCost/EstimateCost';
import SpecialFeatureBox from '../SpecialFeature/SpecialFeatureBox';

import {useSelector} from 'react-redux'

const clientInformation = useSelector((store) => store.client)



function ProjectInformationPage() {
  return (
    <div className="container">
      <p>Job #:</p>
      <AddClient />
      <WorkOrder />
      <SpecialFeatureBox />
      <ProjectScope />
      <ImagePage />
      <EstimateCost />

    </div>
  );
}

export default ProjectInformationPage;
