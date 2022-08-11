import React, { useState } from 'react';
import {useSelector} from 'react-redux';

// Basic functional component structure for React with default state
// value setup.
function ProjectInformation(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Project Information');

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default ProjectInformation;
