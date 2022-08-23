import React, { useState } from "react";
import { useSelector } from "react-redux";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function projectScope(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState(
    "Project Scope"
  );

    return (
      <div className="projectScope">
    <div className="headingClass">
      <h2>{heading}</h2>
      </div>
      //create three template checkboxes with a heading that says "Preperation", and send their values to redux
        <div className="checkboxClass">
            <input type="checkbox" name="Preperation" value="Preperation" />
            <label>Preperation</label>
            </div>
            </div>
        

  );
}

export default projectScope;
