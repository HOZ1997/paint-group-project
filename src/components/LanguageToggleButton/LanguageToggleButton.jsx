import React, { useState } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";


function LanguageToggleButton(props) {

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

// unused  
