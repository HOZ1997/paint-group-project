import React from 'react';
import AddClient from '../AddClient/AddClient';
import WorkOrder from '../ProjectDetails/ProjectDetails';
import ProjectScope from '../projectScope/projectScope';
import ImagePage from '../ImagePage/ImagePage';
import EstimateCost from '../EstimateCost/EstimateCost';
import SpecialFeature from '../SpecialFeature/SpecialFeature';



function ProjectInformationPage() {
  return (
    <div className="container">
      <p>Job #:</p>
      <AddClient />
      <WorkOrder />
      <SpecialFeature />
      <ProjectScope />
      <ImagePage />
      <EstimateCost />

    </div>
  );
}

export default ProjectInformationPage;
