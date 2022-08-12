import React, { useState } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";

// Basic functional component structure for React with default state
// value setup.
function LanguageToggleButton(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const [heading, setHeading] = useState(
    "Functional Component"
  );

  return (
    <div className="languageToggleButton">
      <button
        onClick={() => {
          //toggle between SET_ENGLISH and SET_SPANISH dispatch actions
          store.language === "english"
            ? dispatch({
                type: "SET_SPANISH",
              })
            : dispatch({
                type: "SET_ENGLISH",
              });
        }}
      ></button>
    </div>
  );
}

export default LanguageToggleButton;
