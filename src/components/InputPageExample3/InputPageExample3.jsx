import React from 'react';
import AddClient from '../AddClient/AddClient';
import WorkOrder from '../ProjectDetails/ProjectDetails';
import SpecialFeature from '../SpecialFeature/SpecialFeature';
import ProjectScope from '../ProjectScope/ProjectScope';
import ImagePage from '../ImagePage/ImagePage';
import EstimateCost from '../EstimateCost/EstimateCost';

function InputPageExample3() {
  return (
    <div className="container">
      <p>InputPageExample3</p>

      <WorkOrder />
      <SpecialFeature />
      <ProjectScope />
      
    </div>
  );
}

export default InputPageExample3;
