
import {
  useSelector,
  useDispatch,
} from "react-redux";
import React, {
  useState,
  useEffect,
} from "react";
import { useHistory } from "react-router-dom";
import AddClient from "../AddClient/AddClient";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import ProjectScope from "../ProjectScope/ProjectScope";
import ImagePage from "../ImagePage/ImagePage";
import EstimateCost from "../EstimateCost/EstimateCost";
import SpecialFeature from "../SpecialFeature/SpecialFeature";
import "./ProjectInformationPage.css";

function ProjectInformationPage() {
  const history = useHistory();
  const store = useSelector((store) => store);
  const client = useSelector(
    (store) => store.client
  );
  const projectScope = useSelector(
    (store) => store.projectScope
  );
  const projectDetails = useSelector(
    (store) => store.projectDetails
  );
  const specialFeature = useSelector(
    (store) => store.specialFeature
  );
  const estimateCost = useSelector(
    (store) => store.estimateCost
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "PUSH_NEW_PROJECT" });
  }, []);

  const idStore = useSelector(
    (store) => store.newProject
  );
  const imageReducer = useSelector(
    (store) => store.imageReducer
  );

  const onUpdateInformation = () => {
    let fullForm = {
      client: client,
      projectScope: projectScope,
      projectDetails: projectDetails,
      specialFeature: specialFeature,
      estimateCost: estimateCost,
      id: idStore,
    };
    // //dispatch with full form as payload
    console.log(
      "This is the array of URLs to be sent",
      imageReducer
    );
    const imageObject = {
      photos: imageReducer,
      projectId: idStore,
    };

    //   //dispatch to send image urls to database
    dispatch({
      type: "SAVE_URLS",
      payload: imageObject,
    });

    history.push(`/Proposal/${idStore}`);
    console.log(
      "in full Form button click",
      fullForm
    );
    dispatch({
      type: "UPDATE_FULLFORM",
      payload: fullForm,
    });
  };

  console.log("maybe the id:::::::::::", idStore);

  return (
    <div className="container">
      <div className="jobNumberClass">
        <h2>JOB # {idStore}</h2>
      </div>
      <AddClient />
      <ProjectDetails />
      <SpecialFeature />
      <ProjectScope />
      <ImagePage />
      <EstimateCost />

      <button
        button
        type="button"
        className="myButton"
        onClick={onUpdateInformation}
      >
        CREATE PROPOSAL
      </button>
    </div>
  );
}

export default ProjectInformationPage;
