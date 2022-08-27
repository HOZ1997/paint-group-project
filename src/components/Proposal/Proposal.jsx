import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
// import LanguageToggleButton from '../LanguageToggleButton/LanguageToggleButton';
import './Proposal.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function Proposal(props) {
 // const [lorem, ipsum] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'FETCH_PROJECT'});
  }, []);

  const history = useHistory();

  const store = useSelector((store) => store.getProject);

  const newProject = () => {
    history.push(``);
  };

  return (
    <div className="container">
      <section id="frontPage">
        {JSON.stringify(store)}
      </section>
      <section id="jobIntro">

      </section>
      <section id="clientDetails">

      </section>
      <section id="proposalPhotos">

      </section>
      <section id="scopeOfWork"></section>
    </div>
  );
}

export default Proposal;
