import React, {
  useState,
  useEffect,
} from "react";
import { useHistory } from "react-router-dom";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import LanguageToggleButton from "../LanguageToggleButton/LanguageToggleButton";
import "./Projects.css";

// CUSTOM COMPONENTS


function Projects(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_PROJECTS" });
  }, []);

  const history = useHistory();
  const store = useSelector((store) => store);
  const projects = useSelector(
    (store) => store.projects
  );

  const goToProject = (id) => {
    history.push(`/WorkOrder/${id}`);
  };

  const newProject = () => {
    history.push(`/ProjectInformationPage`);
  };

  return (
    <div className="container">


      <div className="grid">
        {projects.length === 0 ? (
          <p>...loading...</p>
        ) : (
          <table>
            <thead>
              {store.language === "english" ? (
                <tr>
                  <th>NAME</th>
                  <th>JOB NUMBER</th>
                </tr>
              ) : (
                <tr>
                  <th>Nombre</th>
                  <th>Trabajo ID</th>
                </tr>
              )}
            </thead>
            <tbody>
              {projects.map((project, index) => {
                return (
                  <tr
                    key={project.id}
                    onClick={() => {
                      goToProject(project.id);
                    }}
                  >
                    <td>
                      {
                        project.client_firstlast_name
                      }
                    </td>
                    <td>00{project.id}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      {store.language === "english" ? (
        <button
          class="myButton"
          onClick={newProject}
        >
          ADD PROJECT
        </button>
      ) : (
        <button onClick={newProject}>
          Nuevo Proyecto
        </button>
      )}
    </div>
  );
}

export default Projects;
