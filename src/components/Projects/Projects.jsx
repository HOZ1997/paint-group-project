import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import LanguageToggleButton from '../LanguageToggleButton/LanguageToggleButton';
import './Projects.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function Projects(props) {
 // const [lorem, ipsum] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'FETCH_PROJECTS'});
  }, []);

  const history = useHistory();
  const store = useSelector((store) => store);
  const projects = useSelector(store => store.projects);
  console.log('projects const values', projects);



  const goToProject = (id) => {
    history.push(`/information/${id}`);
  };

  const newProject = () => {
    history.push(`/addclient`);
  };

  return (
    <div className="container">
      {/* <LanguageToggleButton />  Commented out for now if Spanish is implemented uncomment */}

      {store.language === "english" ?
      (<h2>Projects</h2>) :
      (<h2>Proyectos</h2>)
      }

      <div className="grid">
      {(projects.length === 0) ? <p>...loading...</p> : (
        <table>
          <thead>
            {store.language === "english" ? (
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Status</th>
            </tr>
            ) : (
            <tr>
              <th>Nombre</th>
              <th>ID</th>
              <th>Estado</th>
            </tr>)}
          </thead>
          <tbody>
            {projects.map( (project, index) => {

              return (
              <tr className="projectsList" key={project.id} onClick={()=>{goToProject(project.id)}}>
                <td>{project.full_name}</td>
                <td>{project.address_1}</td>
                <td >{project.project_status_name}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      )}

      </div>
      {store.language === "english" ? (
        <button onClick={newProject}>Add Project</button>
        ) : (
          <button onClick={newProject}>Nuevo Proyecto</button>
        )}
    </div>
  );
}

export default Projects;
