import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ProjectsList.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function ProjectsList() {
 // const [lorem, ipsum] = useState('');
  const history = useHistory();

  // const onLogin = (event) => {
  //   history.push('');
  // };

  return (
    <div className="container">
      <h2>Projects</h2>

      <div className="grid">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            id felis metus. Vestibulum et pulvinar tortor. Morbi pharetra lacus
            ut ex molestie blandit. Etiam et turpis sit amet risus mollis
            interdum. Suspendisse et justo vitae metus bibendum fringilla sed
            sed justo. Aliquam sollicitudin dapibus lectus, vitae consequat odio
            elementum eget. Praesent efficitur eros vitae nunc interdum, eu
            interdum justo facilisis. Sed pulvinar nulla ac dignissim efficitur.
            Quisque eget eros metus. Vestibulum bibendum fringilla nibh a
            luctus. Duis a sapien metus.
          </p>

        </div>
      </div>
  );
}

export default ProjectsList;
