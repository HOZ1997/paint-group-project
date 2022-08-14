import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './Projects.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function Projects() {
 // const [lorem, ipsum] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'FETCH_PROJECTS'});
  }, []);

  const history = useHistory();
  const projects = useSelector(store => store.projects);
  console.log('projects const values', projects);



  const goToProject = (id) => {
    history.push(`/information/${id}`);
  };

  const newProject = () => {
    history.push(`/addproject`);
  };

  return (
    <div className="container">
      <h2>Projects</h2>

      <div className="grid">
      {(projects.length === 0) ? <p>...loading...</p> : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map( (project, index) => {

              return (
              <tr key={project.id} onClick={()=>{goToProject(project.id)}}>
                <td>{project.full_name}</td>
                <td>{project.address_1}</td>
                <td >{project.project_status_name}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      )}
        <button onClick={newProject}>Add Project</button>
      </div>
    </div>
  );
}

export default Projects;
