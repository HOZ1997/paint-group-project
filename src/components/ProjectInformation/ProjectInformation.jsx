import React, { useState } from "react";
import { useSelector } from "react-redux";

// Basic functional component structure for React with default state
// value setup.
function ProjectInformation(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState(
    "Project Information"
  );

  return (
    <div>
      <h2>{heading}</h2>
      {/* create a questionnaire for painting houses */}
      <p>
        <strong>Client Name:</strong>
      </p>
      <p>
        <strong>Client Address:</strong>
      </p>
      <p>
        <strong>City:</strong>
      </p>
      <p>
        <strong>State:</strong>
      </p>
      <p>
        <strong>Zip Code:</strong>
      </p>
      <p>
        <strong>Primary Phone:</strong>
      </p>
      <p>
        <strong>Email:</strong>
      </p>
      <p>
        <strong>Paint ID:</strong>
      </p>
      <p>
        <strong>Project Location ID:</strong>
      </p>
      <p>
        <strong>Project Status ID:</strong>
      </p>
      <p>
        <strong>Language ID:</strong>
      </p>
      <p>
        <strong>Photo:</strong>
      </p>
      <p>
        <strong>Estimate:</strong>
      </p>
      <p>
        <strong>Estimated Startdate:</strong>
      </p>
      <p>
        <strong>Notes:</strong>
      </p>
      <p>
        <strong>Downpayment Amount:</strong>
      </p>
      <p>
        <strong>Current Date:</strong>
      </p>
    </div>
  );
}

export default ProjectInformation;
