import React from 'react';
import AddClient from '../AddClient/AddClient';
import WorkOrder from '../WorkOrder/WorkOrder';
import SpecialFeature from '../SpecialFeature/SpecialFeature';
import ProjectScope from '../ProjectScope/ProjectScope';
import ImagePage from '../ImagePage/ImagePage';
import EstimateCost from '../EstimateCost/EstimateCost';

function InputPageExample2() {
  return (
    <div className="container">
      <p>InputPageExample2</p>

      <AddClient />
      <WorkOrder />
      <SpecialFeature />
      <ProjectScope />
      
    </div>
  );
}

export default InputPageExample2;
